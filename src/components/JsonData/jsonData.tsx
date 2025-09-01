import React, { useState } from "react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import './jsonData.css';

type Json =
  | null
  | string
  | number
  | boolean
  | Json[]
  | { [k: string]: Json };

function MakeTree({
  data,
  rootLabel = "root",
  level=0
}: {
  data: Json;
  rootLabel?: string;
  level?:number
}) {
  // reset cycle guard whenever data ref changes
  const seen = new WeakSet<object>();

  const renderNode = (value: unknown, path: string, level:number): React.ReactNode => {
    
    // primitives (and null)
    if (value === null || typeof value !== "object") {
      const key =path.split(".").pop() ?? (path || rootLabel)
      const id = path || "root";
      return <TreeItem 
              key={id} // for unique identification in react
              itemId={id}  // used internally by MUI libary to identity item
              label={`${key}: ${String(value)}`} />;
    }

    // circular guard
    if (seen.has(value as object)) {
      const id = `${path || "root"}.__circular__`;
      return (
        <TreeItem
          key={id}
          itemId={id}
          label={`${(path.split(".").pop() ?? rootLabel)}: [Circular]`}
        />
      );
    }
    else{
      seen.add(value as object); // if the object is new
    }

    // arrays
    if (Array.isArray(value)) {
      const id = path || "root";
      return (
        <TreeItem key={id} itemId={id} label={`${path.split(".").pop() ??rootLabel} (array)`}>
          {value.map((v, i) => renderNode(v, path ?`${path}[${i}]` :`[${i}]`,level+1))}
        </TreeItem>
      );
    }

    // plain objects
    const id = path || "root";
    const label = path ? path.split(".").pop()! : rootLabel;
    return (
      <TreeItem key={id} itemId={id} label={label}>
        {Object.entries(value as Record<string, unknown>).map(([k, v]) =>
          renderNode(v,path ? `${path}.${k}`:k,level+1)
        )}
      </TreeItem>
    );
  };


  return <SimpleTreeView>{renderNode(data, "",0)}</SimpleTreeView>;
}

const JsonData = () => {
  const [jsonData, setJsonData] = useState<Json>(null);

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string) as Json;
        setJsonData(parsed);
      } catch (err) {
        console.error("Invalid JSON:", err);
      }
    };
    reader.readAsText(file);
  }

  return (
    <div className="json-page">
      <div className="json-card">
        <div className="json-header">
          <h2 style={{ margin: 0 }}>JSON Viewer</h2>
          <div className="json-file">
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleFileUpload}
              aria-label="Upload JSON file"
            />
          </div>
        </div>

        {
          jsonData &&
          <div className="json-tree">
            <MakeTree data={jsonData} rootLabel="My JSON" />
          </div>
        }
      </div>
    </div>
  );
};

export default JsonData;

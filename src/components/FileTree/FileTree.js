import React from 'react';
import { RiFolderOpenLine, RiFileCodeLine, RiImageLine } from "react-icons/ri";
import './FileTree.css';

const typeToIcon = {
  folder: <RiFolderOpenLine />,
  json: <RiFileCodeLine />,
  image: <RiImageLine />,
  code: <RiFileCodeLine />
}

const FileTreeItem = ({ name, items=[], type, description }) => (
  <li className="file-tree-item">
    {typeToIcon[type]}
    {name}
    <span className="file-tree-item-description">{description}</span>
    {items.length ? <ul className="">
      {items.map(item => <FileTreeItem {...item} key={item.name} />)}
    </ul> : null}
  </li>
)

const FileTree = ({ items, link }) => (
  <ul className="file-tree">
    {items.map(item => <FileTreeItem {...item} key={item.name} link={link} />)}
  </ul>
);

export default FileTree;
import * as React from "react";
import "../../../styles/listItemBlock.css";
interface IListItemBlockProps {
  title: string;
  onItemClick?: (event: React.SyntheticEvent) => void;
  onRightClick?: (event: React.SyntheticEvent) => void;
}

export const ListItemBlock = (props: IListItemBlockProps): JSX.Element => {
  const { title, onItemClick, onRightClick } = props;
  return (
    <div className="listItemBlockStyles" onClick={onItemClick} onContextMenu={onRightClick}>
      {title}
    </div>
  );
};

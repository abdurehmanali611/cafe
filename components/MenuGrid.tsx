import MenuItems from "./MenuItems";

const MenuGrid = ({ preview = false }: { preview?: boolean }) => {
  return (
    <div>
      <MenuItems preview={preview} />
    </div>
  );
};

export default MenuGrid;

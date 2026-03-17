import { useMenuStore } from "../stores/useMenuStore";

export default function Nav() {
  const { activeMenu, setActiveMenu } = useMenuStore();
  const menuItems = ["About", "Projects", "Activities", "Feedback"];

  return (
    <div className="flex gap-4 justify-center lg:justify-start pb-2 select-none">
      {menuItems.map((menu) => (
        <button
          key={menu}
          onClick={() => {
            if (activeMenu === menu) {
              // 이미 활성화된 메뉴 클릭 시 상단으로 스크롤
              const container = document.querySelector(".custom-scrollbar");
              if (container) {
                container.scrollTo({ top: 0, behavior: "smooth" });
              }
            } else {
              setActiveMenu(menu);
            }
          }}
          className={`${
            activeMenu === menu
              ? "text-black border-b-4 border-black rounded-sm transition-colors"
              : "text-gray-300 hover:text-gray-500"
          } pb-1 transition-colors cursor-pointer`}
        >
          {menu}
        </button>
      ))}
    </div>
  );
}

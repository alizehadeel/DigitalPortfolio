function toggleSidebar() {
  const sidebar = document.getElementById("sidebar no-scrollbar");
  const main = document.getElementById("main  no-scrollbar");

  if (sidebar.style.width === "300px") {
    sidebar.style.width = "0";
    main.classList.remove("blur-sm");
  } else {
    sidebar.style.width = "300px";
    main.classList.add("blur-sm");
  }
}
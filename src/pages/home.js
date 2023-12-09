import MainLayout from "../components/layout/Main";
import Button from "@mui/material/Button";
import { useDrawer } from "../context/DrawerContext";

function Home() {
  const { toggleDrawer } = useDrawer();

  return (
    <MainLayout>
      <div style={{ padding: "16px" }}>
        <Button variant="contained" onClick={() => toggleDrawer()}>
          Open Drawer
        </Button>
        <p style={{ color: "#fff" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
          voluptatem impedit perferendis voluptate ipsa facilis, mollitia
          ducimus explicabo laudantium eligendi quo recusandae autem doloribus
          magnam voluptatum. Molestiae odit magnam fugit ab neque quisquam sint,
          iure illum in? Itaque incidunt possimus dolorem consequuntur aliquid,
          voluptatibus dignissimos molestias. Asperiores atque necessitatibus
          cupiditate!
        </p>
      </div>
    </MainLayout>
  );
}

export default Home;

import Dashboard from "@/layouts/Dashboard";

export default function Page() {
  return <h1>Add course</h1>;
}

Page.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};

import RootLayout from "@/components/Shared/RootLayout/RootLayout";

const layout = ({ children }) => {
  return (
    <>
      <RootLayout>{children}</RootLayout>
    </>
  );
};

export default layout;

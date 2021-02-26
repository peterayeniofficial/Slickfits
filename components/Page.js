import Header from './Header';

export default function Page({ children }) {
  return (
    <>
      <Header />
      <h1>Layout</h1>
      {children}
    </>
  );
}

export const App = ({
  callback
}: {
  callback: () => void
}) => {
  // Callback will be called when the div is first created.
  return (
    <div ref={callback}>
      <h1>Hey Hey!</h1>
    </div>
  );
}

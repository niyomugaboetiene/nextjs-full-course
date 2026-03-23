export default function Renderayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <p>Type of renders</p>
        {children}
      </div>
    </div>
  );
}

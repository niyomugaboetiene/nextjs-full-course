export default function RestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <p>RESTFUL APIs</p>
        {children}
      </div>
    </div>
  );
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <p>Posts</p>
        {children}
      </div>
    </div>
  );
}

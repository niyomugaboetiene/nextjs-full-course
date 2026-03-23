export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <p>Blog Post</p>
        {children}
      </div>
    </div>
  );
}

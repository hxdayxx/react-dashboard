import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_back-layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div>
      Hello "/_back-layout"!
      <Outlet />
    </div>
  );
}

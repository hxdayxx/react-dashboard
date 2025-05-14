import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_back-layout/users/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_dashboard-layout/users/"!</div>;
}

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_back-layout/dashboard/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_dashboard-layout/dashboard/"!</div>;
}

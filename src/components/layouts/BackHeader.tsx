import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { ModeToggle } from './ModeToggle';

const BackHeader = () => {
  return (
    <header className="flex items-center gap-2 border-b h-12 group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 transition-[width,height] ease-linear shrink-0">
      <div className="flex justify-between items-center gap-1 lg:gap-2 px-4 lg:px-6 w-full">
        <div className="flex items-center -ml-1">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="font-medium text-base">Page Title</h1>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default BackHeader;

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Link } from '@tanstack/react-router';
import {
  BadgeCheck,
  ChevronsUpDown,
  Home,
  LogOut,
  Shield,
  Sparkles,
  User,
} from 'lucide-react';

const BackSidebar = () => {
  const { isMobile } = useSidebar();

  const menuGroup = [
    {
      name: 'Dashbaord',
      menuItems: [
        {
          name: 'Dasboard',
          url: '/dashboard',
          icon: Home,
        },
      ],
    },
    {
      name: 'User Management',
      menuItems: [
        {
          name: 'Users',
          url: '/users',
          icon: User,
        },
        {
          name: 'Roles & Permissions',
          url: '/users/role-permissions',
          icon: Shield,
        },
      ],
    },
  ];

  const user = {
    name: 'John Doe',
    email: 'johndone@gmail.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
  };

  return (
    <Sidebar>
      <SidebarHeader className="flex justify-center border-b h-12">
        <h1 className="font-medium text-base">React Dashboard</h1>
      </SidebarHeader>

      <SidebarContent>
        {menuGroup?.map((group) => (
          <SidebarGroup key={group.name}>
            <SidebarGroupLabel>{group?.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group?.menuItems?.map((menu) => (
                  <SidebarMenuItem key={menu?.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={menu?.url === window.location.pathname}
                    >
                      <Link to={menu?.url}>
                        {menu.icon && <menu.icon />}
                        <span>{menu?.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="rounded-lg w-8 h-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 grid text-sm text-left leading-tight">
                    <span className="font-semibold truncate">{user.name}</span>
                    <span className="text-xs truncate">{user.email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="rounded-lg w-[--radix-dropdown-menu-trigger-width] min-w-56"
                side={isMobile ? 'bottom' : 'right'}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-sm text-left">
                    <Avatar className="rounded-lg w-8 h-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 grid text-sm text-left leading-tight">
                      <span className="font-semibold truncate">
                        {user.name}
                      </span>
                      <span className="text-xs truncate">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default BackSidebar;

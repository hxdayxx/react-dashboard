import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/themProvider';
import { Moon, Sun } from 'lucide-react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === 'dark' ? (
        <Button
          variant="ghost"
          size="icon"
          className="size-7"
          onClick={() => setTheme('light')}
        >
          <Sun />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className="size-7"
          onClick={() => setTheme('dark')}
        >
          <Moon />
        </Button>
      )}
    </>
  );
}

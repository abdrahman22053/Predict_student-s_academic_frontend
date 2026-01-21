import { Moon, Sun, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTheme } from '@/hooks/useTheme'
import { useLocale } from '@/hooks/useLocale'

export function Header() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const { currentLanguage, changeLanguage } = useLocale()

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink bg-clip-text text-transparent">
            {t('app.title')}
          </h1>
          <p className="text-sm text-muted-foreground hidden sm:block">
            {t('app.subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <Select value={currentLanguage} onValueChange={changeLanguage}>
            <SelectTrigger className="w-[140px]">
              <Globe className="h-4 w-4 ltr:mr-2 rtl:ml-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">{t('language.fr')}</SelectItem>
              <SelectItem value="en">{t('language.en')}</SelectItem>
              <SelectItem value="ar">{t('language.ar')}</SelectItem>
            </SelectContent>
          </Select>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            title={t('theme.toggle')}
          >
            {isDark ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}

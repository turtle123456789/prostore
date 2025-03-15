'use client'
import { Button } from '@/components/ui/button'
import { DropdownMenu,DropdownMenuCheckboxItem,DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ToggleTheme = () => {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()
    useEffect(() => {
        setMounted(true)
    }, [])
    if(!mounted) return null
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className='focus-visible:ring-0  focus-visible:ring-offset-0'>
                {theme === "light"?
                    (
                        <SunIcon/>
                    ) : theme === "dark"?(
                        <MoonIcon/>
                    ):(
                        <SunMoon/>
                    )
                }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuCheckboxItem checked={theme === 'system'}
                onClick={()=>setTheme('system')}
            >
                System
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme === 'light'}
                onClick={()=>setTheme('light')}
            >
                Light
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme === 'dark'}
                onClick={()=>setTheme('dark')}
            >
                Dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuSeparator/>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToggleTheme
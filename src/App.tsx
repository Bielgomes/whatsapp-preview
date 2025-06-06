import { format } from "date-fns"
import { Moon, Sun } from "lucide-react"
import { useState } from "react"

import { useTheme } from "@/components/theme-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function App() {
  const maxMessageLength = 101
  const maxNameLength = 40

  const [avatar, setAvatar] = useState<string>("")
  const [name, setName] = useState<string>("Strange user")
  const [text, setText] = useState<string>("Lorem ipsum Dolor Sit Amet")
  const [hour, setHour] = useState<string>(format(new Date(), 'HH:MM'))
  const [messageCount, setMessageCount] = useState<number>(1)

  const { setTheme } = useTheme()

  return (
    <main className="bg-background">
      <div className="flex flex-col mb-8 w-2xl p-4 rounded-lg border-dashed border-2 gap-2">
        <div className="gap-2 flex mb-2">
          <Button onClick={() => setTheme("light")}>
            <Sun />
            Tema Claro
          </Button>
          <Button variant="outline" onClick={() => setTheme("dark")}>
            <Moon />
            Tema Escuro
          </Button>
        </div>

        <div className="gap-1 flex flex-col">
          <Label htmlFor="avatar">Foto de Perfil</Label>
          <Input id="avatar" type="url" placeholder="Url da Foto de Perfil" value={avatar} onChange={event => setAvatar(event.target.value)} />
        </div>

        <div className="gap-1 flex flex-col">
          <Label htmlFor="name">Nome de Usuário</Label>
          <Input id="name" type="text" placeholder="Nome" value={name} onChange={event => setName(event.target.value)} />
        </div>

        <div className="gap-1 flex flex-col">
          <Label htmlFor="message">Mensagem</Label>
          <Input id="message" type="text" placeholder="Mensagem" value={text} onChange={event => setText(event.target.value)} />
        </div>

        <div className="gap-1 flex flex-col">
          <Label htmlFor="hour">Hora</Label>
          <Input id="hour" type="text" placeholder="Hora (00:00)" value={hour} onChange={event => setHour(event.target.value)} />
        </div>

        <div className="gap-1 flex flex-col">
          <Label htmlFor="messageCount">Quantidade de Mensagens</Label>
          <Input id="messageCount" type="number" placeholder="Número de Mensagens" min={1} max={99} value={messageCount} onChange={event => setMessageCount(Number(event.target.value))} />
        </div>
      </div>

      <div className="flex p-6 border-2 rounded-xl border-dashed border-amber-400 w-min">
        <Avatar className="w-20 h-20">
          <AvatarImage src={avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="ml-4 max-w-md w-md relative">
          <div className="flex justify-between">
            <strong className="font-black">{name.slice(0, maxNameLength) + (name.length > maxNameLength ? "..." : "" )}</strong>
            <span className="text-green-700 dark:text-green-500">{hour}</span>
          </div>

          <div className="flex relative">
            <p className="leading-5 text-zinc-600 pr-12 dark:text-[#959595]">{text.slice(0, maxMessageLength) + (text.length > maxMessageLength ? "..." : "" )}</p>

            <div className="rounded-full w-5 h-5 bg-green-700 dark:bg-green-500 absolute right-0 top-0">
              <span className="text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white dark:text-black">{messageCount}</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default App

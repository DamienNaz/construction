import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col gap-6 w-full max-w-md">
      {/* Inputs */}
      <div className="flex flex-col gap-4">
        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />
        <Input type="tel" placeholder="Telefone" />

        <Select>
          <SelectTrigger className="flex h-[54px] w-full rounded-none border border-border bg-white px-6 py-2 text-base text-primary shadow-sm transition-colors placeholder:text-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 ">
            <SelectValue placeholder="Selecciona o serviço" />
          </SelectTrigger>
          <SelectContent  align="start" className="w-[200px] translate-x-28">

            <SelectGroup>
              <SelectItem value="construction">AVAC</SelectItem>
              <SelectItem value="renovation">Canalização</SelectItem>
              <SelectItem value="restoration">Pequenas Obras</SelectItem>
              <SelectItem value="consulting">Renováveis</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Message + Button */}
      <div className="flex flex-col gap-4 mt-4 justify-center">
        <Textarea
          className="h-[180px] resize-none rounded-none text-primary font-semibold"
          placeholder="Mensagem"
        />
        <Button text="Enviar" />
      </div>
    </form>
  );
};

export default Form;

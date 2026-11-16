export default function Loading(){
    return(
        <div role="status" className="flex flex-col items-center justify-center gap-4 px-4 text-center">
            <div className="border-accent rounded-full animate-spin w-10 h-10 border-4 border-t-transparent"></div>
            <p className="text-ink-primary">Aguarde enquanto preparamos tudo...</p>
        </div>
    )
}
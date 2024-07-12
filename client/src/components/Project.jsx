import { createSignal, onMount } from "solid-js";

export default function Project({name, description, images, techs, code, demo}) {
    const [imageLoaded, setImageLoaded] = createSignal(false);
    onMount(() => {
        setImageLoaded(true);
    })
    return (
    <article
        class="flex flex-row w-3/4 h-48 rounded-md border-l border-t border-r border-fuchsia-500/20 bg-gradient-to-br from-transparent via-violet-950/10 to-fuchsia-600/20 backdrop-blur-[2px]"
    >
        <div class="w-2/4 mr-2">
            {!imageLoaded() && <div class="h-full w-full rounded-md bg-fuchsia-500/20 animate-pulse"></div>}
                <img
                    src={images.src}
                    loading="eager"
                    class={`${imageLoaded() ? 'block' : 'hidden'} w-full rounded-md h-full`}
                    alt={`Screenshot of my project ${name}`}
                />
        </div>
        <div class="flex flex-col justify-evenly flex-wrap w-full h-full">
            <div class="flex flex-col w-full text-pretty gap-2">
                <h5 class="mr-auto text-lg">{name}</h5>
                <p class="text-sm">
                    {
                        (description && description) || (
                            <div class="animate-pulse bg-fuchsia-600/20 w-full h-[.8rem] rounded-full" />
                        )
                    }
                </p>
            </div>
            <div class="flex flex-row justify-start w-full">
                <ul class="flex flex-row flex-wrap justify-start gap-1 w-3/4">
                    {
                        techs.map((t) => {
                            return (
                                <li key={t} class="text-sm text-amber-200 p-1 h-min rounded-xl bg-gradient-to-br from-slate-500/10 to-fuchsia-500/20">
                                    {t}
                                </li>
                            );
                        })
                    }
                </ul>
                <div
                    class="flex flex-row text-white/50 justify-center gap-3 w-[25%]"
                >
                    <a href={code}>Code</a>
                    {demo && <a href={demo}>Demo</a>}
                </div>
            </div>
        </div>
    </article>
    )
}
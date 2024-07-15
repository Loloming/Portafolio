import { createSignal, onMount } from "solid-js";

export default function Project({name, description, images, techs, code, demo}) {
    const [imageLoaded, setImageLoaded] = createSignal(false);
    onMount(() => {
        setImageLoaded(true);
    })
    return (
    <article
        class="flex lg:flex-row flex-col lg:h-48 h-min w-3/4 rounded-md border-l border-t border-r border-fuchsia-500/30 bg-gradient-to-br from-slate-500/10 via-violet-950/10 to-fuchsia-500/20 backdrop-blur-[2px] transition ease-in-out hover:scale-[1.02]"
    >
        <div class="lg:w-2/4 lg:mr-2">
            {!imageLoaded() && <div class="lg:h-full w-full xl:h-full md:h-52 h-40 lg:rounded-md rounded-t-md bg-fuchsia-500/20 animate-pulse"></div>}
                <img
                    src={images.src}
                    loading="eager"
                    class={`${imageLoaded() ? 'block' : 'hidden'} z-0 w-full lg:h-full md:h-52 h-40 lg:rounded-md rounded-t-md`}
                    alt={`Screenshot of my project ${name}`}
                />
        </div>
        <div class="flex flex-col lg:gap-0 lg:p-0 gap-2 p-2 justify-evenly flex-wrap w-full h-full">
            <div class="flex flex-col w-full text-pretty gap-2">
                <h5 class="lg:mr-auto lg:mx-0 mx-auto xl:text-xl text-base font-onest text-white font-medium">{name}</h5>
                <p class="lg:text-base md:text-sm md:px-0 text-white text-xs px-2">
                    {
                        (description && description) || (
                            <div class="animate-pulse bg-fuchsia-600/20 w-full h-[.8rem] rounded-full" />
                        )
                    }
                </p>
            </div>
            <div class="flex flex-row md:justify-between justify-center w-full">
                <ul class="flex flex-row flex-wrap md:items-center justify-start gap-1 w-3/4">
                    {
                        techs.map((t) => {
                            return (
                                <li key={t} class="lg:text-base sm:text-sm text-xs font-onest font-normal text-amber-200 p-1 h-min rounded-xl bg-gradient-to-br from-slate-500/20 to-fuchsia-500/30 transition ease-in-out hover:-translate-y-[2px]">
                                    {t}
                                </li>
                            );
                        })
                    }
                </ul>
                <div
                    class="flex md:flex-row flex-col items-center text-white lg:justify-center gap-3 lg:w-[25%] w-min lg:text-base sm:text-sm text-xs font-onest"
                >
                    <a class="h-min w-max bg-gradient-to-tr from-slate-500/10 via-violet-950/10 to-fuchsia-500/20 rounded-md mx-2" href={code}><h6 class="p-1">Code</h6></a>
                    {demo && <a class="h-min w-max bg-gradient-to-tr from-slate-500/10 via-violet-950/10 to-fuchsia-500/20 rounded-md" href={demo}><h6 class="p-1">Demo</h6></a>}
                </div>
            </div>
        </div>
    </article>
    )
}
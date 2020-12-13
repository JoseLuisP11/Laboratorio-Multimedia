import { Component, OnInit } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { NgForm } from '@angular/forms';

declare var VTTCue;

export interface ICuePoint {
    id: string;
    title: string;
    description: string;
    src: string;
    href: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    opcion_correcta: string;
}

export interface IWikiCue {
    startTime: number;
    endTime: number;
    title: string;
    description: string;
    src: string;
    href: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    opcion_correcta: string;
}
@Component({
    selector: 'app-video-interactivo',
    templateUrl: './video-interactivo.component.html',
    styleUrls: ['./video-interactivo.component.css']
})
export class VideoInteractivoComponent implements OnInit {
    sources = [
        {
            name: 'Receta de bizcocho',
            src: '../assets/videos/receta bizcocho multimedia.mp4',
            type: 'video/mp4',
            vtt: "assets/data/puntosBizcocho.vtt"
        },
        {
            name: 'Desinfectar coche',
            src: "../assets/videos/desinfectar coche multimedia.mp4",
            type: "video/mp4",
            vtt: "assets/data/puntosCoche.vtt"
        },
        {
            name: 'Recomendación coche',
            src: '../assets/videos/recomendacion coche multimedia.mp4',
            type: 'video/mp4',
            vtt: "assets/data/puntosCoche2.vtt"
        },
        {
            name: 'Vídeo online videogular',
            src: "http://static.videogular.com/assets/videos/videogular.mp4",
            type: 'video/mp4',
            vtt: "assets/data/puntosGulag.vtt"
        }
    ];
    activeCuePoints: ICuePoint[] = [];
    api: VgApiService;
    track: TextTrack;
    showCuePointManager = false;
    bucle = false;
    hasFallado = false;
    json: JSON = JSON;

    activeIndex = 0;
    currentVideo = this.sources[this.activeIndex];

    newCue: IWikiCue = {
        startTime: 20,
        endTime: 25,
        title: 'Yogur',
        description: 'El yogur​ es un producto lácteo obtenido mediante la fermentación de la leche. ¿Qué tipo de yogur usa en el vídeo?',
        src: 'https://images.cookforyourlife.org/wp-content/uploads/2018/08/Creamy_lemon_yogurt_shutterstock_43582843.jpg',
        href: 'https://es.wikipedia.org/wiki/Yogur',
        p1: "Limón",
        p2: "Fresa",
        p3: "Menta",
        p4: "Plátano",
        opcion_correcta: "Limón"
    };



    constructor() { }

    ngOnInit() {

    }

    onPlayerReady(api: VgApiService) {
        this.api = api;
        //this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.ngOnInit.bind(this));
        this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
        this.track = this.api.textTracks[0];
    }

    nextVideo() {
        this.activeIndex++;

        if (this.activeIndex === this.sources.length) {
            this.activeIndex = 0;
        }

        this.currentVideo = this.sources[this.activeIndex];
    }

    initVdo() {
        //this.api.play();
    }

    startPlaylistVdo(item, index: number) {
        this.activeIndex = index;
        this.currentVideo = item;
    }

    onSubmit(form: NgForm, event: Event) {
        event.preventDefault();

        if (form.valid) {
            const jsonData = {
                title: form.value.title,
                description: form.value.description,
                src: form.value.src,
                href: form.value.href,
                p1: form.value.p1,
                p2: form.value.p2,
                p3: form.value.p3,
                p4: form.value.p4,
                opcion_correcta: form.value.opcion_correcta
            };
            const jsonText = JSON.stringify(jsonData);
            var cue = new VTTCue(form.value.startTime, form.value.endTime, jsonText);
            cue.id =form.value.title;
            this.track.addCue(cue);
        }
    }

    onClickRemove(cue: TextTrackCue) {
        this.track.removeCue(cue);
    }

    onClickAnswer(px: string, p: ICuePoint, api: VgApiService) {
        if (p.opcion_correcta === px) {
            this.bucle = false;
            api.currentTime = this.track.cues.getCueById(p.id).endTime - 0.001;

            this.hasFallado = false;
        } else {
            api.currentTime = this.track.cues.getCueById(p.id).startTime;
            this.hasFallado = true;
        }

    }
    onEnterCuePoint($event) {
        this.activeCuePoints.push({ "id": $event.id, ...JSON.parse($event.text) });
        this.bucle = true;
    }

    onExitCuePoint($event, api: VgApiService) {
        let startTime: number = this.track.cues.getCueById($event.id).startTime;
        let endTime: number = this.track.cues.getCueById($event.id).endTime;

        if (this.bucle) {
            api.currentTime = this.track.cues.getCueById($event.id).startTime;
        } else {
            this.activeCuePoints = this.activeCuePoints.filter(c => c.id !== $event.id);
        }
    }
}

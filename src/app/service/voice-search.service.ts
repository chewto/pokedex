import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

declare var webkitSpeechRecognition:any;

@Injectable({
  providedIn: 'root'
})
export class VoiceSearchService {

  public text$ = new Subject<string>();
  private recognition = new webkitSpeechRecognition();

  constructor() { }

  public start(){
    this.recognition.interimResults = false;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (event:any)=>{
      let transcript = Array.from(event.results)
        .map((result:any) => result[0])
        .map((result:any) => result.transcript)
        .join('')

        console.log(transcript);
        this.text$.next(transcript);
    })
  }

  public hear(){
    this.recognition.start();
    console.log('microphone on')
  }

}

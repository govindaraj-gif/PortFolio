import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf-scanner',
  templateUrl: './pdf-scanner.component.html',
  styleUrls: ['./pdf-scanner.component.scss']
})
export class PdfScannerComponent implements OnInit{
    openCamera = false;
    @ViewChild('input') input !: ElementRef;
    @ViewChild('canvas') canvas!: ElementRef;
    image = false;
    constructor(){}

    ngOnInit(): void {
        
    }

    fileInput(){
      this.input.nativeElement.click();
    }

    onFileSelected(event:Event){
      const input = event.target as HTMLInputElement;
      if(input.files && input.files[0]){
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = (e : ProgressEvent<FileReader>) => {
          const img = new Image();
          img.src = e.target?.result as string;
          img.onload = () => {
            const canvas = this.canvas.nativeElement as HTMLCanvasElement;
            const ctx = canvas.getContext('2d')!;
            const aspectRatio = img.height / img.width;

            canvas.height = 200 * aspectRatio;
            canvas.width = 200;

            ctx.clearRect(0,0,canvas.width ,canvas.height);
            ctx.drawImage(img ,0,0,canvas.width,canvas.height);
            this.image = true;
          };
        };

        reader.readAsDataURL(file);
      }
    }

    savePdf(){
      const canvas = this.canvas.nativeElement as HTMLCanvasElement;
      const imgData = canvas.toDataURL('image/jpeg');

      const pdf = new jsPDF('p' ,'mm' ,'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth - 20;
      const imgheight = pageHeight - 20;

      pdf.addImage(imgData , 'JPEG' ,10,10,imgWidth ,imgheight);
      pdf.save('image.pdf');
    }
}

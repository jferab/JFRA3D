#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>
#include <time.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
    char cadena[1000];
	FILE *archivo;
	time_t t;
	archivo = fopen("miarchivo.txt","w");
	fprintf(archivo,"Inicio\n");
	printf("Inicio\n");
	//fprintf(archivo,"Esto es una prueba2\n");
	//fprintf(archivo,"Esto es una prueba3\n");
	fclose(archivo);
	/* Intializes random number generator */
    srand((unsigned) time(&t));
	
	//system("cls");
	int ronda = 0;
	
	int posx1 = 0;

	int posx2 = 0;
	int posx3 = 0;
	int posy1 = 0;
	int posy2 = 0;
	int posy3 = 0;
	
	int desX = 0;
	int desY = 0;

	double botUno = 1000.0;
	double botBob = 1000.0;
	double botJacinto = 1000.0;
	
	double danoCons = 142.0;
	
	bool final = true;
	
	
	archivo = fopen("miarchivo.txt","a");
	while(final){
		
		desX = rand() % 101;
		desY = rand() % 101;
		
		ronda += 1;
		printf("Ronda %i\n", ronda);
		fprintf(archivo,"Ronda %i\n", ronda);
		
		if(botUno>0.0){
			posx1 = rand() % 101;
			posy1 = rand() % 101;
			double vida1 = danoCons-sqrt(pow(posy1-desY,2.0)+pow(posx1-desX,2.0));
			botUno -= vida1;
		}
		
		if(botBob>0.0){
			posx2 = rand() % 101;
			posy2 = rand() % 101;
			double vida2 = danoCons-sqrt(pow(posy2-desY,2.0)+pow(posx2-desX,2.0));
			botBob -= vida2;
		}
		
		if(botJacinto>0.0){
			posx3 = rand() % 101;
			posy3 = rand() % 101;
			double vida3 = danoCons-sqrt(pow(posy3-desY,2.0)+pow(posx3-desX,2.0));
			botJacinto -= vida3;
		}
		
		
		/*while(fgets(cadena,100,archivo)){
			printf(cadena);
		}
		fclose(archivo);*/
		
		
		//archivo = fopen("miarchivo.txt","w");
		//fprintf(archivo,"%c\n",cadena);
		
		printf("La bala impacto en: %i , %i\n",desX,desY);
		printf("Coordenadas botUno: %i , %i\n",posx1,posy1);
		printf("Vida del botUno: %lf\n",botUno);
		fprintf(archivo,"La bala impacto en: %i , %i\n",desX,desY);
		fprintf(archivo,"Coordenadas botUno: %i , %i\n",posx1,posy1);
		fprintf(archivo,"Vida del botUno: %lf\n",botUno);
		
		
		//printf("La bala impacto en X : %i , y en Y : %i\n",desX,desY);
		printf("Coordenadas botBob: %i , %i\n",posx2,posy2);
		printf("Vida del botBob: %lf\n",botBob);
		fprintf(archivo,"Coordenadas botBob: %i , %i\n",posx2,posy2);
		fprintf(archivo,"Vida del botBob: %lf\n",botBob);
		
		//printf("La bala impacto en X : %i , y en Y : %i\n",desX,desY);
		printf("Coordenadas botJacinto: %i , %i\n",posx3,posy3);
		printf("Vida del botJacinto: %lf\n",botJacinto);
		fprintf(archivo,"Coordenadas botJacinto: %i , %i\n",posx3,posy3);
		fprintf(archivo,"Vida del botJacinto: %lf\n",botJacinto);
		
		
		
		//fclose(archivo);
		
		
		
	/*	archivo = fopen("miarchivo.txt","w");

		fprintf(archivo,"Esto es una prueba:");
		if(final){
			fprintf(archivo,"verdad\n");
		}else{
			fprintf(archivo,"falso\n");
		}
		fclose(archivo);
		*/
		if(ronda>=100){
			final = false;
		}
		
		if((botJacinto<=0.0 && botUno<=0.0)||(botJacinto<=0.0 && botBob<=0.0)||(botUno<=0.0 && botBob<=0.0)){
			final = false;
		}
	
		//fprintf(archivo,"Esto es una prueba2\n");
		//fprintf(archivo,"Esto es una prueba3\n");
		printf("\n");
		fprintf(archivo,"\n");
		
		sleep(1);
		
	}
	//printf(cadena);
	//archivo = fopen("miarchivo.txt","r");
	/*while(fgets(cadena,100,archivo)){
			printf(cadena);
			//printf(cadena);
		}
	fclose(archivo);*/
	//archivo = fopen("miarchivo.txt","w");
	//int i = 0;
	/*for(i = 0; i<100;i++){
		fprintf(archivo,"%c",cadena[i]);
	}*/
	
	//fprintf(archivo,"Esto es una prueba:");
	if(botUno>0.0){
		fprintf(archivo,"El ganador es botUno, con una vida de: %lf\n",botUno);
		fprintf(archivo,"Perdieron botBob y botJacinto\n");
		
	}else if(botBob>0.0){
		fprintf(archivo,"El ganador es botBob, con una vida de: %lf\n",botBob);
		fprintf(archivo,"Perdieron botUno y botJacinto\n");
	
	}else if(botJacinto>0.0){
		fprintf(archivo,"El ganador es botJacinto, con una vida de: %lf\n",botJacinto);
		fprintf(archivo,"Perdieron botUno y botBob\n");
	
	}else{
		fprintf(archivo,"Todos los jugadores perdieron\n");
		
	}
	
	
	

	
	if(botUno>0.0){
				
		printf("El ganador es botUno, con una vida de: %lf\n",botUno);
		printf("Perdieron botBob y botJacinto\n");
		
	}else if(botBob>0.0){
			
		printf("El ganador es botBob, con una vida de: %lf\n",botBob);
		printf("Perdieron botUno y botJacinto\n");
		
	}else if(botJacinto>0.0){
	
		printf("El ganador es botJacinto, con una vida de: %lf\n",botJacinto);
		printf("Perdieron botUno y botBob\n");
		
	}else{
		printf("Todos los jugadores perdieron\n");
	}
	
	fclose(archivo);
	
	//printf("%f\n",botUno);
	
	return 0;
}

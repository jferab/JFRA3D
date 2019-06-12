/****************************************************************************
**
** Copyright (C) 2016 The Qt Company Ltd.
** Contact: https://www.qt.io/licensing/
**
** This file is part of the examples of the Qt Toolkit.
**
** $QT_BEGIN_LICENSE:BSD$
** Commercial License Usage
** Licensees holding valid commercial Qt licenses may use this file in
** accordance with the commercial license agreement provided with the
** Software or, alternatively, in accordance with the terms contained in
** a written agreement between you and The Qt Company. For licensing terms
** and conditions see https://www.qt.io/terms-conditions. For further
** information use the contact form at https://www.qt.io/contact-us.
**
** BSD License Usage
** Alternatively, you may use this file under the terms of the BSD license
** as follows:
**
** "Redistribution and use in source and binary forms, with or without
** modification, are permitted provided that the following conditions are
** met:
**   * Redistributions of source code must retain the above copyright
**     notice, this list of conditions and the following disclaimer.
**   * Redistributions in binary form must reproduce the above copyright
**     notice, this list of conditions and the following disclaimer in
**     the documentation and/or other materials provided with the
**     distribution.
**   * Neither the name of The Qt Company Ltd nor the names of its
**     contributors may be used to endorse or promote products derived
**     from this software without specific prior written permission.
**
**
** THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
** "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
** LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
** A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
** OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
** SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
** LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
** DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
** THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
** (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
** OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."
**
** $QT_END_LICENSE$
**
****************************************************************************/

#include "helper.h"
#include "stdlib.h"
#include "time.h"
//#include "main.cpp"
#include <QPainter>
#include <QPaintEvent>
#include <QWidget>
#include <QRandomGenerator>
#include <QtMath>
/*#include <QtSql/QSqlQuery>
#include <QtSql/QSql>
#include <QtSql/QtSql>
#include <QtSql/QSqlDatabase>
#include <QtSql/QSqlIndex>*/
#include <QCoreApplication>
#include <QtSql>
//! [0]
Helper::Helper()
{


    //QSqlDatabase db = QSqlDatabase::addDatabase("QSQLITE");
    //db.setDatabaseName("clase.db");
     //bool primerEntrada=true;
//bool ok =db.open();
  /*  QSqlDatabase db = QSqlDatabase::addDatabase("QSQLITE");
    db.setDatabaseName("juego.db");
    db.open();
    bool ok =db.open();
    qDebug() << ok;
    qDebug("hola66");*/
    //if(primerEntrada==true){

        QSqlQuery peticion;
        //peticion.prepare("INSERT INTO usuarios Values('ddd','ddd','ddd')");
        //peticion.exec();

            qDebug("hola");
         QSqlQuery damelo;
         //damelo.prepare("SELECT * FROM usuarios");
         damelo.prepare("SELECT * FROM memoriaJuego");
         //damelo.prepare("SELECT * FROM juego");

         damelo.executedQuery();
         damelo.exec();
         qDebug() << damelo.executedQuery();
          qDebug() << damelo.exec();
         qDebug() << damelo.next();
        //int idNombre = damelo.record().indexOf("nombre");
          //float posx[20];
          //float posy[20];

         int cont =0;
//damelo.next()
         while(damelo.next()){
            //qDebug("hola77");
            float XX = damelo.value(0).toFloat();
            posx[cont]= XX;
            //qDebug() << XX;
            float YY = damelo.value(1).toFloat();
            posy[cont]= YY;
            //qDebug() << YY;
            //int VIda = damelo.value(2).toInt();
            //vida =VIda;
            //qDebug() << cont;
            cont++;
         }

        //printf("la base de datos se ha abierto %d", ok);
       // primerEntrada=false;
    //}

    QLinearGradient gradient(QPointF(50, -20), QPointF(80, 20));
    gradient.setColorAt(0.0, Qt::white);
    gradient.setColorAt(1.0, QColor(0xa6, 0xce, 0x39));

    background = QBrush(QColor(0, 0, 255));
    circleBrush = QBrush(gradient);
    circlePen = QPen(Qt::black);
    circlePen.setWidth(1);
    textPen = QPen(Qt::white);
    textFont.setPixelSize(50);
    numero=20;
    iteraciones = 10;
    srand(time(NULL));
    for(int k = 0; k< numero;k++){
        int numberx=400;
        //int randomValuex = (qrand() % numberx)-(numberx/2);
        int randomValuex = (rand() % numberx)-(numberx/2);
        int numbery=400;
        //int randomValuey = (qrand() % numbery)-(numbery/2);
        int randomValuey = (rand() % numbery)-(numbery/2);
        //posx[k] = randomValuex;
        //posy[k] = randomValuey;
        radio[k] = 8;
        fuerza[k] = 2;
        vida[k] = 20;
        vivo[k] = 1;
        energia[k] = 100;

    }
    //posx=100;
    //posy=100;
    //radio=4;
}
//! [0]

//! [1]
void Helper::paint(QPainter *painter, QPaintEvent *event, int elapsed)
{
    double menor = 100000;
    int valor=-1;
    for(int i = 0; i< numero;i++){
        if(vida[i]>0){
            for(int z = 0; z < numero; z++){
                if((z!=i)&&(vida[z]>0)){
                   qreal mag = qSqrt(qPow(posx[z]-posx[i],2)+qPow(posy[z]-posy[i],2));
                    if(mag<menor){
                        menor=mag;
                        valor=z;
                    }
                }
            }
        }
         if(vida[i]>0){
            posx[i] += (posx[valor]-posx[i])*(1/energia[i]);
            posy[i] += (posy[valor]-posy[i])*(1/energia[i]);
            if(menor<= 12.0){
                vida[valor]-=fuerza[i];
                if(vida[valor]<=0){
                    radio[valor] = 0;
                    vida[i]+=20;
                    fuerza[i]+=2;
                    radio[i]+=2;
                }
            }
         }
        /*int numberx=4;
        int randomValuex = (qrand() % numberx)-(numberx/2);
        int numbery=4;
        int randomValuey = (qrand() % numbery)-(numbery/2);
        posx[i] += randomValuex;
        posy[i] += randomValuey;*/

         menor = 100000;
         valor=-1;

    }

    painter->fillRect(event->rect(), background);
    painter->translate(200, 200);
//! [1]

//! [2]
    painter->save();
    painter->setBrush(circleBrush);
    painter->setPen(circlePen);
    //painter->rotate(elapsed * 0.030);

    qreal r = elapsed / 1000.0;
    int n = 30;

    for(int y = 0; y< numero;y++){
         //painter->drawEllipse(posx[y],posy[y],radio[y],radio[y]);
        //QRectF cuadrado(posx[y],posy[y],radio[y],radio[y]);
        //painter->fillRect(cuadrado,QBrush("#00ff00"));
       if(radio[y]<=8){
        painter->setBrush(QBrush("#00ff00"));
        painter->drawEllipse(posx[y],posy[y],radio[y],radio[y]);
        }else if (radio[y]<=10) {
           painter->setBrush(QBrush("#ffff00"));
           painter->drawEllipse(posx[y],posy[y],radio[y],radio[y]);
        }else if(radio[y]<=12){
           painter->setBrush(QBrush("#ff0000"));
           painter->drawEllipse(posx[y],posy[y],radio[y],radio[y]);
        }else {
           painter->setBrush(QBrush("#000000"));
           painter->drawEllipse(posx[y],posy[y],radio[y],radio[y]);
        }
    }

    /* for (int i = 0; i < n*2; ++i) {
        painter->rotate(30);
        qreal factor = (i + r) / n;
        qreal radius = 0 + 120.0 * factor;
        qreal circleRadius = 1 + factor * 20;
        painter->drawEllipse(QRectF(radius, -circleRadius, circleRadius * 2, circleRadius * 2));
        painter->drawRect(i,0,15,15);
    }
    */
    painter->restore();
//! [2]

//! [3]

    /*
    painter->setPen(textPen);
    painter->setFont(textFont);
    painter->drawText(QRect(-50, -50, 100, 100), Qt::AlignCenter, QStringLiteral("Qt"));
*/
}
//! [3]

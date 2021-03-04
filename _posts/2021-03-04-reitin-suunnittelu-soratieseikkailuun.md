---
layout: post
title: Reitin suunnittelu soratieseikkailuun
header_slogan_class: white
header_image_style: "background-image: url('/assets/norja20.jpg');"
post_image: /assets/norja2.jpg
image: /assets/norja20.jpg
keywords: "moottoripyöräily, matkaenduro, seikkailu endurolla, MRA, navigaattori, garmin, reitti, MyRoute-app, soratie"
description: Miten suunnittelet helposti reitin soratieseikkailuun?
excerpt_separator: <!--more-->
---

{::options parse_block_html="true" /}


<div>

**Sisältö**

* [Johdanto](#johdanto)
* [MyRoute-app (MRA)](#myroute-app)
* [MRA käyttöohje ja vinkkejä työkalun käyttöön](#mra-kayttoohje-ja-vinkkeja)
  * [Perusohje, reitin suunnittelu](#reitin-suunnittelu)
  * [Maastoreitin sisällyttäminen reittiin](#maastoreitin-sisallyttaminen-reittiin)
  * [Reittisuunnitelman jakaminen](#reittisuunnitelman-jakaminen)
* [Reitin lataaminen navigaattoriin](#reitin-lataaminen-navigaattoriin)
  * [Garmin](#reitin-langaton-lataaminen-garmin-zumo-navigaattoriin)
    * [Reitin langaton lataaminen Garmin Zumo 346/396 navigaattoriin](#reitin-langaton-lataaminen-garmin-zumo-navigaattoriin)
    * [Reitin lataaminen USB-kaapelin avulla Garmin Zumo navigaattoriin](#reitin-lataaminen-usb-kaapelin-avulla-garmin-zumo-navigaattoriin)

</div>
{:.sisalto}

<a name="johdanto">&nbsp;</a>

# Johdanto
{:.ohje}
{:id="title-johdanto"}

Moni kapupyöräilijä käyttää navigaattoria vain pidemmillä reissuilla ja 
arkiajot sujuvat muistin varaisesti.
Tämä on ymmärrettävää, koska aika nopeasti 
päällystetyt tiet ja reitit tulevat lähiseudulla tutuksi ja siten reitin 
suunnittelu ja navigointi tapahtuu päässä.

Sorateillä ajaessa tämä ei onnistu. Tyypillisesti esim. vain tunnin 
mittainen ajolenkki sisältää kymmeniä käännöksiä ja teitä, joita ei 
ulkoa voi muistaa. Tämä johtuu siitä, että vaihtoehtoisia teitä ja 
reittejä on huomattavasti enemmän, kuin pelkästään asfalttiteitä 
käytettäessä. Ilman 
suunnittelua ja navigaattoria käykin niin, että tulee ajeltua samoja 
teitä, joiden reitit muistaa. Suunnittelemalla aina reitin etukäteen on 
reittiin helppo sisällyttää joko täysin tuntemattomia teitä tai teitä, 
joissa ei ole pitkään aikaan käynyt, vaikka pyörisikin alle 100km päässä 
kotoa. Näin lähiseudun moninainen maisema ja luonto tulee yhä 
tutummaksi.

Reitin suunnitteluun ja hienosäätöön voi käyttää loputtomasti aikaa. 
Helposti käykin niin, että suunnittelu tulee niin työlääksi, ettei 
sitä viitsi tehdä. Olen pyrkinyt löytämään mahdollisimman helpon ja 
nopean tavan suunnitella reittejä ja esittelen omat ratkaisuni tässä 
kirjoituksessa.

Reitin suunnittelussa käytän työkaluna 
[MyRoute-app:ia](https://myrouteapp.com){:target="_blank"}, joka toimii 
web-selaimella. Sen etuna on, että voit tehdä suunnittelua millä tahansa 
tietokoneella ilman sovellusten asentamista ja karttojen latailua. 
Reitin suunnittelu ja muokkaus onnistuu välttävästi myös 
mobiililaitteella. Suunnitelemasi reitit pysyvät pilvipalvelussa 
tallessa ja pääset niihin käsiksi millä tahansa laitteella.

<a name="myroute-app">&nbsp;</a>

# MyRoute-app (MRA)
{:.ohje}

MRA palvelun tärkeimmät ominaisuudet eri versioissa.

* [Palvelu](https://myrouteapp.com){:target="_blank"} koostuu 
tietokoneella 
käytettävästä 
web-sovelluksesta ja kahdesta mobiilisovelluksesta
* Palvelusta on saatavissa rajoitettu ilmaisversio sekä erillaisilla 
kokonaisuuksilla 
[maksullisia](https://www.myrouteapp.com/en/products/compare){:target="_blank"}
versioita

Tärkeimmät ominaisuudet, jotka ovat käytettävissä **kaikissa** 
versioissa

* Reitin suunnittelutyökalu
  * Kohteiden ja reittipisteiden määrittäminen osoite ja paikkahaun 
avulla
  * Reittipisteiden määrittäminen raahaamalla olemassa olevaa reittiä 
hiirellä uuteen paikkaan
  * Offroad-osuuksien sisällyttäminen reittiin ts. automaattisen 
reitityksen kytkeminen pois päältä kahden reittipisteen välillä
  * Reitin lataaminen 14 eri tiedostomuodossa
  * Muilla työkaluilla tehtyjen reittitiedostojen lähetys palveluun
  * OpenStreetMap kartat
* Mobiilisovellus
  * Ajetun reitin tallennus matkalogiin
  * Samat reitin suunnittelutyökalun ominaisuudet kuin tietokoneella. 
Voit esimerkiksi helposti näyttää kaverille suunnittelemasi reitin.

Tärkeimmät lisäominaisuudet, jotka ovat käytettävissä <b>Gold</b> ja 
<b>all-in-one</b> versiossa

* Reitin suunnittelutyökalu
  * Lisäksi Here (Garmin) ja TomTom kartat käytettävissä reititykseen
  * Mahdollisuus verrata eri karttojen 
automaattireititystä
  * Reitin muuntamien käänteiseksi
  * Reittipisteiden automaattinen lisääminen, jolloin voidaan 
varmistaa, että navigaattori menee suunniteltua reittiä pitkin
  * Satelliittikuvat sekä mahdollisuus vaihtaa taustakartaksi mm. Google 
Maps:n karttoja
 
Tärkeimmät lisäominaisuudet, jotka ovat käytettävissä <b>all-in-one</b> 
ja <b>Navigation</b> versiossa

* Käännösten opastuksen sisältävä navigaattori älypuhelimeen

<a name="mra-kayttoohje-ja-vinkkeja">&nbsp;</a>

# MRA käyttöohje ja vinkkejä työkalun käyttöön
{:.ohje}

<div>

* [Perusohje, reitin suunnittelu](#reitin-suunnittelu)
* [Maastoreitin sisällyttäminen reittiin](#maastoreitin-sisallyttaminen-reittiin)
* [Reittisuunnitelman jakaminen](#reittisuunnitelman-jakaminen)

</div>
{:.sisalto}


<i style="font-size: 0.9em">
Mikäli sinulla ei ole vielä tunnuksia MyRoute-app palveluu, 
rekisteröidy palveluun 
ilmaiseksi [tästä.](https://www.myrouteapp.com/en/register)
</i>

<a name="reitin-suunnittelu">&nbsp;</a>

#### Perusohje, reitin suunnittelu
{:.ohje}

Seuraavassa käydään läpi perusreitin suunnittelu Korpilahdelta 
Keuruulle.

1\. Kirjaudu sisään [palveluun](https://www.myrouteapp.com/en/user/login)

![Aloitus](/assets/aloitus-routes.png)
{:class="img-right"}
2\. Valitse <b>Routes</b>
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Uusi reitti](/assets/new-route.png)
{:class="img-right"}
3\. Valitse <b>"New"</b> -> <b>"Route"</b>
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Reitin nimi](/assets/route-name.png)
{:class="img-right"}
4\. Aseta reitille nimi ja valitse OK
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Hae aloituspiste](/assets/hae-aloitus.png)
{:class="img-right"}
5\. Hae aloituspiste hakukentän avulla kirjoittamalla kenttään 
<b>korp</b> ja valitse <b>Korpilahti FI-41860 Jyväskylä</b> 
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Lopetuspisteen haku](/assets/hae-lopetus.png)
{:class="img-right"}
6\. Hae lopetuspiste hakukentän avulla kirjoittamalla kenttään 
<b>keur</b> ja valitse <b>Keuruu Keski-Suomi</b>
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Valmis reitti](/assets/reitti.png)
{:class="img-right"}
7\. Nyt sinulla on automaattisesti laskettu reitti välillä Korpilahti - 
Keuruu
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

Tässä esimerkissä olen käyttänyt HERE karttoja (Gold versiossa). 
Näin ollen reitti on laskettu HERE (Garmin) algoritmin avulla 
oletusasetuksilla ja se on järkevin reitti esimerkiksi autolle. Tausta 
karttana olen käyttänyt Google Maps:n karttoja.

Automaattisesti laskettu reitti seurailee isoja teitä. Mehän taas 
haluamme mielenkiintoisemman reitin, joka menee pieniä teitä pitkin. 
Seuraavissa vaiheissa käydään läpi, kuinka valmiista reitistä saadaan 
mielenkintoisempi.


![Zoomaus](/assets/zoom.png)
{:class="img-right"}
8\. Zoomaa kartta lähemmäksi alkupistettä hiiren rullalla tai 
käyttöliittymän + -painikkeella siten, että näät kartassa myös pienemmät tiet.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Reitin muuttaminen](/assets/reitin-raahaus.gif)
{:class="img-right"}
9\. Vie hiiri reittiviivan pääle ja paina vasen nappi pohjaan. Raahaa 
reitti haluamasi tien päälle ja päästä nappi ylös. Ohjelma laskee reitin 
uudelleen siten, että se kiertää juuri määrittämäsi reittipisteen 
kautta.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Reitin korjaus](/assets/reitin-korjaus.gif)
{:class="img-right"}
10\. Käy läpi koko reitti edellä mainitulla tavalla. Näin sinulla on 
mielenkiintoinen reitti välillä Korpilahti - Keuruu.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

Lopuksi reitti pitää viimeistellä. Raahatessasi reittiä 
uuteen kohtaan reittipiste tulee tarkalleen siihen kohtaa, johon sen 
hiirellä päästät. Siten ne eivät ole tarkasti tien kohdalla. Tästä 
voi seurata, että navigaattori opastaa sinua tien sivuun. Näin 
ollen on hyvä käydä kaikki pisteet läpi ja siirtää ne keskelle 
tietä.


![Reitin viimeistely](/assets/reitin-viimeistely.gif)
{:class="img-right"}
11\. Zoomaa kartta lähtöpisteeseen (1.) niin lähelle, että näät tien 
leveänä. Valiste hiirellä reittipiste, jolloin saat näkyviin valikon. 
Oikeasta nuoli-painikeesta pääset seuraavaan 
reittipisteeseen samalla 
zoomaus-tasolla. Mikäli reittipiste ei ole keskellä tietä, raahaa piste 
tielle. Valitse jälleen ko. reittipiste, jolloin voit siirtyä seuraavaan 
reittipisteeseen nuolen avulla. Voit käyttää seuraavaan reittipisteesee 
siirtymiseen myös tietokoneen nuolinäppäimiä.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Reigin lataus](/assets/reitin-lataus.png)
{:class="img-right"}
12\. Lopuksi lataa reitti tietokoneellesi, jonka jälkeen voit siirtää 
sen navigaattoriisi. Valitse <b>"Save as"</b> ja haluamasi 
tiedostotyyppi. Garminin kanssa käytän gpx 1.0 (route, track, POI) 
muotoa.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

<p>&nbsp;</p>

<a name="maastoreitin-sisallyttaminen-reittiin">&nbsp;</a>

#### Maastoreitin sisällyttäminen reittiin
{:.ohje}


Perusohjeessa kävin läpi MRA:n käytön perusteet. Seuraavassa kerrotaan, 
kuinka voit sisällyttää reittiin osia, joita sovelluksen tiekartat eivät 
tunne. Näin ollen voit sisällyttää reittiin teidän lisäksi maastoajoa.

![Lähtötilanne](/assets/lahtotilanne.png)
{:class="img-right"}
1\. Lähtötilanne. Reitti on tarkoitus ajaa numerojärjestyksessä. 
Kartat eivät kuitenkaan tunne tietä pisteiden 2 ja 3 
välillä. Tämän takia reitti kiertää pisteiden välillä alakautta.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Tason vaihto](/assets/tasot-kuvake.png)
{:class="img-right"}
2\. Vie hiiri tasot-kuvakkeen päälle, jolloin voit valita mitä 
karttoja taustalla näytetään.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Valitse tastakartta](/assets/valitse-kartta.png)
{:class="img-right"}
3\. Valitse taustakartoiksi Google Maps Satellite.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Muut asetukset](/assets/more-options.png)
{:class="img-right"}
4\. Nyt huomaat, että pisteiden 2 ja 3 välillä kulkee tie. 
Valitse hiirellä reittipiste 3 ja paina painiketta, jossa on kolme 
pistettä (More options).
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Offroad](/assets/skip.png)
{:class="img-right"}
5\. Paina maastoauto-painiketta (Skip) estääksesi tien mukainen 
reittilaskenta pisteiden 2 ja 3 välillä.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Linnuntietä](/assets/linnuntieta.png)
{:class="img-right"}
6\. Nyt pisteide 2 ja 3 välillä on suora viiva, koska ohjelma ei 
pyrikkään piirtämään viivaa teiden mukaisesti. Monessa tilanteessa 
tämä on jo riittävä taso.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Reitin muokkaus](/assets/offroad-reitin-saato.gif)
{:class="img-right"}
7\. Halutessasi voit määrittää useita reittipisteitä ja siten 
saada maastoreitin kulkemaan paremmin uraa noudattelevaksi. Ota 
reittiviivasta kiinni ja raaha se parempaan kohtaan. Tämän jälkeen 
määritä vielä uudelle pisteelle ns. offroad tila, kuten kohdassa 5.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![Lopullinen reitti](/assets/viimeistelty.png)
{:class="img-right"}
8\. Halutessasi voit edellä kuvatulla tavalla piirtää reitin 
noudattamaan hyvinkin tarkastin ajettavaa uraa.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

Edelläkuvatulla tavalla voit mihin tahansa reittiin sisällyttää 
maastopätkiä. Voit myös määrittää asetuksista, että koko reiti on ns. 
offroad tilassa. Tällaisia pätkiä sisältävä reitti ei toimi kaikissa
navigattoreissa. Garmineissa, joissa reitin voi gpx tiedostosta ottaa 
ns. jäljen avulla, voi hyödyntään tätä ominaisuutta. Muissa tapauksissa 
navigaattori laskee reitin reittipisteiden mukaan ja se ei tunnista 
MRA-sovelluksessa määritettyä pistekohtaista asetusta. 
Gpx tiedosto sisältää kuitenkin myös reitin ns. jälkilogina, jolloin 
navigaattori voidaan tämän avulla saada noudattamaan orjallisesti 
reittiä, joka sovelluksessa on suunniteltu.

<a name="reittisuunnitelman-jakaminen">&nbsp;</a>

#### Reittisuunnitelman jakaminen
{:.ohje}
{:id="title-reittisuunnitelman-jakaminen"}

Kun olet suunnitellut reitit MRA:n avulla voit jakaa sen monella tapaa 
ajokavereillesi. Mikäli ajokaverillasi on myös MRA käytössä, on 
helpointa jakaa reitti sovelluksen avulla. Voi määrittää luomasi reitin 
joko yksityiseksi, julkiseksi tai siten, että sovelluksessa kaveriksi 
määritellyt käyttäjät näkevät sen.

Voit ladata reitin tiedostoksi kaikilla yleisimmillä reittitiedosto 
muodoilla. Lähettämällä tiedoston ajokaverillsi, hän voi ladata sen 
omaan navigaattoriin. 

Valitsemalla <b>Share</b> -> <b>Embed</b>, voit kopioida upotuskoodin 
kotisivuillesi tai blogiin. Tällöin reitti on julkinen ja kuka tahansa 
voi MRA:n käyttöliittymällä tutkia reittiä ja ladata halutessaan sen GPX muodossa itselleen.

Ohessa esimerkkinä perusohjeessa esittelemäni reitti Korpilahdelta 
Keuruulle. Painamalla hiirve vasenta painiketta kartan päällä, pääset 
näkemään tarkempia tietoja. Kun seuraavassa näkymässä valitset 
**Use route**, niin pääset selailemaan ja muokkaamaan reittiä MRA:n 
käyttöliittymällä kaikilla ominaisuuksilla vaikka et olisi 
rekisteröitynyt palveluun. 
<div class="post-video">
<iframe style="border:none;overflow:hidden" width="560" height="286" 
scrolling="no" frameborder="0" 
src="https://www.myrouteapp.com/embed/route/2964690?lang=en"></iframe>
</div>
<p></p>

<a name="reitin-lataaminen-navigaattoriin">&nbsp;</a>

# Reitin lataaminen navigaattoriin
{:.ohje}
{:id="title-reitin-lataaminen-navigaattoriin"}

<div>

* [Reitin langaton lataaminen Garmin Zumo 346/396 navigaattoriin](#reitin-langaton-lataaminen-garmin-zumo-navigaattoriin)
* [Reitin lataaminen USB-kaapelin avulla Garmin Zumo navigaattoriin](#reitin-lataaminen-usb-kaapelin-avulla-garmin-zumo-navigaattoriin)

</div>
{:.sisalto}


<a name="reitin-langaton-lataaminen-garmin-zumo-navigaattoriin">&nbsp;</a>

#### Reitin langaton lataaminen Garmin Zumo 346/396 navigaattoriin  
{:.ohje}


Puhelimessasi pitää olla asennettuna kaksi sovellusta: 
[MyRoute-app 
Mobile](https://play.google.com/store/apps/details?id=com.cloudmax.myrouteapp&hl=fi){:target="_blank"}
ja [Garmin Smartphone 
Link.](https://play.google.com/store/apps/details?id=com.garmin.android.apps.phonelink&hl=fi){:target="_blank"}


![](/assets/garmin-bt-1.jpg)
{:class="img-right"}
1\. Käynnistä Myroute-app sovellus älypuhelimessa ja valitse pääsivulta 
**My Routes**
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![](/assets/garmin-bt-2.jpg)
{:class="img-right"}
2\. Paina reittilistasta haluamasi reitin kohdalta oikeassa 
laidassa olevaa painiketta (kolme pistettä).
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![](/assets/garmin-bt-3.jpg)
{:class="img-right"}
3\. Valitse **Save as**
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![](/assets/garmin-bt-4.jpg)
{:class="img-right"}
4\. Vaihda tiedostotyypiksi gpx 1.0 (route, track, POI) ja valitse 
sitten **Save**
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![](/assets/garmin-bt-5.jpg)
{:class="img-right"}
5\. Pyyhkäisen näytön ylälaidasta alaspäin, jolloin saat ilmoitukset 
näkyviin. Valitse juuri lataamasi reittitiedosto, 
tässä tapauksessa **Korpilahti-Keuruu.gpx.**
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![](/assets/garmin-bt-6.jpg)
{:class="img-right"}
6\. Valitse sovellukseksi **Smartphone Link**, jolla tiedosto avataan.
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![](/assets/garmin-bt-7.jpg)
{:class="img-right"}
7\. Valitse **Lähetä Zumo-laitteeseen**
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

![](/assets/garmin-bt-8.jpg)
{:class="img-right"}
8\. Tämän jälkeen navigaattorissasi pitäisi näkyä kaksi ilmoitusta: 
"Uusia jälkiä vastaanotettiin, ja ne lisättiin jälkiin", sekä "Uusia 
matkoja vastaanotettiin, ja ne lisättiin matkasuunnitteluun".
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

Lataamasi reitti löytyy nyt navigaattoristasi sekä **Jäljet**, että **Matkasuunnittelu** sovelluksista. Mikäli reittisi sisältää maasto-osia, et voi käyttää suoraan Matkasuunnitelusta löytyvää reittiä. Tällaisessa tilanteessa saat toimivan reitin, kun menet lataamasi reittiin **Jäljet** sovelluksessa ja valitset **Muunna matkaksi**. Lisäksi sinun pitää kytkeä navigaattoristasi pois reitin automaattinen uudelleenlaskenta.

<a name="reitin-lataaminen-usb-kaapelin-avulla-garmin-zumo-navigaattoriin">&nbsp;</a>

#### Reitin lataaminen USB-kaapelin avulla Garmin Zumo navigaattoriin
{:.ohje}
{:id="title-reitin-lataaminen-usb-kaapelin-avulla"}

![Save as](/assets/save_as.png)
{:class="img-right"}
1\. Mene haluamasi reitin tietoihin MRA-sovelluksessa ja valitse **Save as** ja **gpx 1.0 (route, track, POI)**
{:class="img-text"}

&nbsp;
{:class="clear-and-empty"}

Kytke navigaattorisi tietokoneen USB-porttiin. Kopioi lataamasi tiedosto navigaattorin muistiin GPX-kansioon.

Irrota navigaattori tietokoneesta hallitusti ja valitse navigaattorin käyttöliittymästä **Tuo reitti tiedostosta**

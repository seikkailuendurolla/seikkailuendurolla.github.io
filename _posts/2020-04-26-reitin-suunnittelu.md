---
layout: post
title: Ajoreitin suunnittelu ja navigointi
header_slogan_class: white
header_image_style: "background-image: url('/assets/norja20.jpg');"
post_image: /assets/norja2.jpg
image: /assets/norja20.jpg
keywords: "moottoripyöräily, matkaenduro, seikkailu endurolla, MRA, navigaattori, garmin, reitti"
description: Miten suunnittelet helposti reitin moottoripyörä retkellesi.
excerpt_separator: <!--more-->
---

{::options parse_block_html="true" /}

<div style="padding-left: 0px; background-color: #f9fbfb; margin-bottom: 1em; padding: 1em; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">

<b>Sivun sisältö</b>

* [MyRoute-app (MRA)](#)
* [MyRoute-app käyttöohje ja vinkkejä työkalun käyttöön](#)
  * [Perusohje, reitin suunnittelu](#)
  * [Maastoreitin sisällyttäminen reittiin](#)
  * [Reittisuunnitelman jakaminen](#)
* [Reitin lataaminen navigaattoriin](#)
  * [Garmin](#)
    * Garmin, USB-kaapelilla
    * Garmin, älypuhelimella langattomasti
  * [TomTom](#)
    * USB-kaapelilla
    * Pilvipalvelun kautta
  * [muut?](#)


</div>

Olen huomannut, että katupyöräilijöillä navigaattorin käyttö on aika 
vähäistä. Lähinnä tarvetta ilmenee pidemmillä reissuilla ja lähiajelut 
mennään muistin varaisesti. Tämä on ymmärrettävää, koska aika nopeasti 
päälystetyt tiet ja reitit tulevat lähiseudulla tutuksi ja siten reitin 
suunnittelu ja navigointi tapahtuu päässä.

Sorateillä ajaessa tämä ei onnistu. Tyypillisesti esim. vain tunnin 
mittainen ajolenkki sisältää kymmeniä käännöksiä ja teitä, joita ei 
ulkoa voi muistaa. Tämä johtuu siitä, että vaihtoehtoisia teitä ja 
reittejä on huomattavasti enemmän, kuin asfalttiteitä. Ilman 
suunnittelua ja navigaattoria käykin niin, että tulee ajeltua samoja 
teitä, joiden reitit muistaa. Suunnittelemalla aina reitin etukäteen on 
reittiin helppo sisällyttää joko täysin tuntemattomia teitä tai teitä, 
joissa ei ole pitkään aikaan käynyt, vaikka pyörisikin alle 100km päässä 
kotoa. Näin lähiseudun moninainen maisema ja luonto tulee yhä 
tutummaksi.

Reitin suunnitteluun ja hienosäätöön voi käyttää loputtomasti aikaa. 
Helposti käykin niin, että suunnittelu tuleekin niin työlääksi, ettei 
sitä viitsi tehdä. Olen pyrkinyt löytämään mahdollisimman helpon ja 
nopean tavan suunnitella reittejä ja esittelen omat ratkaisuni tässä 
kirjoituksessa.

Reitin suunnittelussa käytän työkaluna 
[MyRoute-app:ia](https://myrouteapp.com){:target="_blank"}, joka toimii 
web-selaimella. Sen etuna on, että voit tehdä suunnittelua millä tahansa 
tietokoneella ilman sovellusten asentamista ja karttojen latailua. 
Reitin suunnittelu ja muokkaus onnistuu välttävästi myös 
mobiililaitteella.


## MRA käyttöohje ja vinkkejä työkalun käyttöön

<i style="font-size: 0.9em">
Mikäli sinulla ei ole vielä tunnuksia MyRoute-app palveluu, 
rekisteröidy palveluun seuraavasta osoitteesta: [https://www.myrouteapp.com/en/register](https://www.myrouteapp.com/en/register)
</i>

#### Perusohje, reitin suunnittelu

Seuraavassa käydään läpi perusreitin suunnittelu Korpilahdelta 
Keuruulle.

<span>
1. Kirjaudu sisään palveluun: 
[https://www.myrouteapp.com/en/user/login](https://www.myrouteapp.com/en/user/login)
</span>

![Aloitus](/assets/aloitus-routes.png){:class="img-right"}
2. Valitse <b>"Routes"</b>
{:style="clear: both;"}

![Uusi reitti](/assets/new-route.png){:class="img-right"}
3. Valitse "New" -> <b>"Route"</b>
{:style="clear: both;"}

![Reitin nimi](/assets/route-name.png){:class="img-right"}
4. Aseta reitille nimi ja valitse OK
{:style="clear: both;"}

![Alkupisteen haku](/assets/hae-aloitus.png){:class="img-right"}
5. Hae aloituspiste hakukentän avulla kirjoittamalla kenttään 
<b>korp</b> ja valitse <b>Korpilahti FI-41860 Jyväskylä</b>
{:style="clear: both;"}

![Lopetuspisteen haku](/assets/hae-lopetus.png){:class="img-right"}
6. Hae lopetuspiste hakukentän avulla kirjoittamalla kenttään 
<b>keur</b> ja valitse <b>Keuruu Keski-Suomi</b>
{:style="clear: both;"}

![Valmis reitti](/assets/reitti.png){:class="img-right"}
7. Nyt sinulla on automaattisesti laskettu reitti välillä Korpilahti - 
Keuruu
{:style="clear: both;"}

Tässä esimerkissä olen käyttänyt Google Maps karttoja. Näin ollen reitti 
on laskettu Googlen avulla oletusasetuksilla ja valmis ja järkevin 
reitti esimerkiksi autolle. 
{:style="clear: both;"}

Tämä reitti seurailee isoja teitä. Haluamme mielenkiintoisemman reitin, 
joka menee pieniä teitä pitkin. Seuraavissa vaiheissa käydään läpi, 
kuinka valmiista reitistä saadaan mielenkintoisempi.

![Zoomaus](/assets/zoom.png){:class="img-right"}
8. Zoomaa kartta lähemmäksi alkupistettä hiiren rullalla tai 
käyttöliittymän + -painikkeella siten, että näät kartassa myös pienemmät tiet.
{:style="clear: both;"}


![Reitin muuttaminen](/assets/reitin-raahaus.gif){:class="img-right"}
9. Vie hiiri reittiviivan pääle ja paina vasen nappi pohjaan. Raahaa 
reitti haluamasi tien päälle ja päästä nappi ylös. Ohjelma laskee reitin 
uudelleen siten, että se kiertää juuri määrittämäsi reittipisteen 
kautta.
{:style="clear: both;"}

![](/assets/reitin-korjaus.gif){:class="img-right"}
10. Käy läpi koko reitti edellä mainitulla tavalla. Näin sinulla on 
mielenkiintoinen reitti välillä Korpilahti - Keuruu.
{:style="clear: both;"}

Lopuksi reitti pitää viimeistellä. Raahatessasi reittiä 
uuteen kohtaan reittipiste tulee tarkalleen siihen kohtaa, johon sen 
hiirellä päästät. Siten ne eivät ole tarkasti tien kohdalla. Tästä 
voi seurata, että navigaattori opastaa sinua tien sivuun. Näin 
ollen on hyvä käydä kaikki pisteet läpi ja siirtää ne keskelle 
tietä.
{:style="clear: both;"}

![Reitin viimeistely](/assets/reitin-viimeistely.gif){:class="img-right"}
11. Zoomaa kartta lähtöpisteeseen (1.) niin lähelle, että näät tien 
leveänä. Valiste hiirellä reittipiste, jolloin saat näkyviin valikon. 
Oikeasta nuoli-painikeesta pääset seuraavaan reittipisteeseen samalla 
Zoomaus-tasolla. Mikäli reittipiste ei ole keskellä tietä, raahaa piste 
tielle. Valitse jälleen ko. reittipiste, jolloin voit siirtyä seuraavaan 
reittipisteeseen nuolen avulla. Voit käyttää seuraavaan reittipisteesee 
siirtymiseen myös nuolinäppäimiä.
{:style="clear: both;"}

![Reigin lataus](/assets/reitin-lataus.png){:class="img-right"}
12. Lopuksi lataa reitti tietokoneellesi, jonka jälkeen voi siirtää 
sen navigaattoriisi. Valitse <b>"Save as"</b> ja haluamasi 
tiedostotyyppi. Garminin kanssa käytän gpx 1.1 muotoa.
{:style="clear: both;"}


#### Maastoreitin sisällyttäminen reittiin
{:style="clear: both;"}

Perusohjeessa kävin läpi MRA:n käytön perusteet. Seuraavassa kerrotaan, 
kuinka voit sisällyttää reittiin osia, joita sovelluksen tiekartat eivät 
tunne. Näin ollen voit sisällyttää reittiin teidän lisäksi maastoajoa.

![Lähtötilanne](/assets/lahtotilanne.png){:class="img-right"}
1. Lähtötilanne. Reitti on tarkoitus ajaa numerojärjestyksessä. 
Google Maps kartat eivät kuitenkaan tunne tietä pisteiden 2 ja 3 
välillä. Tämän takia reitti kiertää pisteiden välillä alakautta.
{:style="clear: both;"}

![Tason vaihto](/assets/tasot-kuvake.png){:class="img-right"}
2. Vie hiiri tasot-kuvakkeen päälle, jolloin voit valita mitä 
karttoja taustalla näytetään.
{:style="clear: both;"}

![Valitse tastakartta](/assets/valitse-kartta.png){:class="img-right"}
3. Valitse taustakartoiksi Google Maps Satellite.
{:style="clear: both;"}

![Muut asetukset](/assets/more-options.png){:class="img-right"}
4. Nyt huomaat, että pisteiden 2 ja 3 välillä kulkee tie. 
Valitse hiirellä reittipiste 3 ja paina painiketta, jossa on kolme 
pistettä (More options).
{:style="clear: both;"}

![Offroad](/assets/skip.png){:class="img-right"}
5. Paina maastoauto-painiketta (Skip) estääksesi tien mukainen 
reittilaskenta pisteiden 2 ja 3 välillä.
{:style="clear: both;"}

![Linnuntietä](/assets/linnuntieta.png){:class="img-right"}
6. Nyt pisteide 2 ja 3 välillä on suora viiva, koska ohjelma ei 
pyrikkään piirtämään viivaa teiden mukaisesti. Monessa tilanteessa 
tämä on jo riittävä taso.
{:style="clear: both;"}

![Reitin muokkaus](/assets/offroad-reitin-saato.gif){:class="img-right"}
7. Halutessasi voit määrittää useita reittipisteitä ja siten 
saada maastoreitin kulkemaan paremmin uraa noudattelevaksi. Ota 
reittiviivasta kiinni ja raaha se parempaan kohtaan. Tämän jälkeen 
määritä vielä uudelle pisteelle ns. offroad tila.
{:style="clear: both;"}


![Lopullinen reitti](/assets/viimeistelty.png){:class="img-right"}
8. Halutessasi voit edellä kuvatulla tavalla piirtää reitin 
noudattamaan hyvinkin tarkastin ajettavaa uraa.
{:style="clear: both;"}

Edelläkuvatulla tavalla voit mihin tahansa reittiin sisällyttää 
maastopätkiä. Voit myös määrittää asetuksista, että koko reiti on ns. 
offroad tilassa. Tällaisia pitkiä sisältävä reitti ei toimi kaikissa 
navigattoreissa. Garmineissa, joissa reitin voi gpx tiedostosta ottaa 
ns. jäljen avulla, voi hyödyntään tätä ominaisuutta. Muissa tapauksissa 
navigaattori laskee reitin reittipisteiden mukaan ja Garmin ei tiedä 
tunnista pistekohtaista asetusta, kuta MRA-sovellus. Gpx tiedosto 
sisältää kuitenkin myös reitin ns. jälkilogina, jolloin navigaattori 
voidaan tämän avulla saada noudattamaan orjallisesti reittiä, joka 
sovelluksessa on suunniteltu.
{:style="clear: both;"}

#### Reittisuunnitelman jakaminen

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
voi MRA:n käyttöliittymällä tutkia reittiä ja ladata halutessaan sen gpx 
1.1. muodossa itselleen.

Ohessa esimerkkinä perusohjeessa esittelemäni reitti Korpilahdelta 
Keuruulle. Painamalla hiirve vasenta painiketta kartan päällä, pääset 
näkemään tarkempia tietoja. Kun seuraavassa näkymässä valitset 
"Use route", niin pääset selailemaan ja muokkaamaan reittiä MRA:n 
käyttöliittymällä kaikilla ominaisuuksilla vaikka et olisi 
rekisteröitynyt palveluun. 
<div class="post-video">
<iframe style="border:none;overflow:hidden" width="560" height="286" 
scrolling="no" frameborder="0" 
src="https://www.myrouteapp.com/embed/route/2964690?lang=en"></iframe>
</div>
<p></p>



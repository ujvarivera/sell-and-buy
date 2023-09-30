# Követelményspecifikáció

## A feladat neve

### Mobil szoftverfejlesztés házi feladat

## Feladatkiírás

Olyan mobil alkalmazás készítése React Native alapokon, amelyben a felhasználók fel tudnak tölteni eladásra szánt termékeket, majd módosítani, törölni is lehetőségük van azokat.

## A fejlesztői csapat

| Csapattag neve | Neptun-kód |
| :- | :-: |
| Ujvári Veronika | ENFF9U |

## Részletes feladatleírás

-	Adatbázis, táblák megtervezése, Firebase (Backend as a Service) használata
-	Frontend létrehozása React Native segítségével
-	Autentikáció (bejelentkezés, regisztráció) megvalósítása
-	A termékekhez tartozó név, leírás, kategória és egyéb paraméterek rögzítése

## Technikai paraméterek

Az alkalmazás backendként a Firebase (Backend as a Service) szolgáltatást használja, frontend pedig a React Native segítségével kerül megvalósításra.

## Use-case-ek

![use case](pics/use-case.png)
<br />*use case diagram [draw.io](https://draw.io)*

---

<div style="page-break-after: always"></div>

# Rendszerterv

## Tartalomjegyzék

  - [A rendszer célja, funkciói és környezete](#a-rendszer-célja-funkciói-és-környezete)
    - [Főbb funkciók](#főbb-funkciók)
  - [Felhasználói kézikönyv](#felhasználói-kézikönyv)
  - [Adatbázis architektúra](#adatbázis-architektúra)
  - [Telepítési leírás](#telepítési-leírás)
  - [A program készítése során felhasznált eszközök, technológiák](#a-program-készítése-során-felhasznált-eszközök-technológiák)
  - [Összefoglalás](#összefoglalás)
  - [Továbbfejlesztési lehetőségek](#továbbfejlesztési-lehetőségek)
  - [Irodalomjegyzék](#irodalomjegyzék)
    - [Hivatkozások](#hivatkozások)

---

## A rendszer célja, funkciói és környezete

### Főbb funkciók

Az alkalmazás minden funkcióját leírja. Legyen egyértelműen eldönthető, hogy az adott funkció implementálva van-e!

&#x2611; Regisztráció és belépés
&#x2611; Termék hozzáadása frontenden keresztül (cím, termékleírás, kategória, állapot, ár megadásával)
&#9746; Saját termék törlésének lehetősége
&#9746; Összes termék megtekintése
&#9746; Saját termékek megtekintése profil oldalon

---

## Felhasználói kézikönyv

Felhasználói leírás. Az összes releváns képernyő, funkció bemutatása képekkel!

### Regisztráció és bejelentkezés

Az alábbi képen a regisztráció oldala látható. Ha a felhasználó regisztrálni szeretne, e-mail címet és jelszavat szükséges megadnia. A bejelentkezési felület hasonlóan fog kinézni.

![use case](pics/register.JPG)


### Termékek megtekintése

Ezen az oldalon a bejelentkezett felhasználó megtekintheti az összes terméket, az övét és más felhasználó által feltöltöttet is beleértve.

![use case](pics/products.JPG)

### Egy termék megtekintése

Ha a bejelentkezett felhasználó egy termékre kattint, akkor megjelenik neki az adott termék oldala bővebb információkkal, pl. leírással, kategóriával, stb.

![use case](pics/product.JPG)

### Saját termék feltöltése

A bejelentkezett felhasználó ezen az oldalon feltöltheti saját eladásra szánt termékeit. Cím, leírás, kategória, minőség és ár megadása szükséges.

![use case](pics/add_product.JPG)

---

## Adatbázis architektúra

---

## Telepítési leírás

---

## A program készítése során felhasznált eszközök, technológiák

---

## Összefoglalás

---

## Továbbfejlesztési lehetőségek

---

## Irodalomjegyzék

### Hivatkozások

> React Native | A framework for building native apps using React. url: [https://reactnative-dev](https://reactnative.dev)

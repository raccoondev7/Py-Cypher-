

# **Py-Cypher – prosty szyfrator plików w Pythonie**

Py-Cypher to niewielki skrypt w Pythonie, który umożliwia szyfrowanie i deszyfrowanie plików dowolnego typu (np. CSV, TXT, JSON) z wykorzystaniem **cryptography.Fernet** — sprawdzonego mechanizmu szyfrowania symetrycznego z wbudowaną kontrolą integralności.

Projekt pokazuje kompletny przepływ: generowanie klucza, szyfrowanie danych, odtwarzanie oryginalnego pliku oraz prosty interfejs terminalowy.

---

## **Wymagania**

* Python 3.8+
* Biblioteka `cryptography`:

```bash
pip install cryptography
```

---

## **Uruchomienie**

### 1. Wygeneruj klucz szyfrowania

```bash
python py-cypher5.py
# wybierz opcję: 1
```

Plik `klucz.key` pojawi się w katalogu projektu.

---

### 2. Zaszyfruj plik

```bash
python py-cypher5.py
# wybierz opcję: 2
# podaj nazwę pliku, np. pliktest.csv
```

W katalogu pojawi się:

```
pliktest.csv.enc
```

---

### 3. Odszyfruj plik

```bash
python py-cypher5.py
# wybierz opcję: 3
# podaj nazwę: pliktest.csv.enc
```

Na wyjściu otrzymasz ponownie:

```
pliktest.csv
```

---

## **Struktura projektu**

```
py-cypher5.py      # główny skrypt
klucz.key          # generowany klucz szyfrowania (nie commitować!)
pliktest.csv       # przykładowy plik testowy
pliktest.csv.enc   # zaszyfrowana wersja
index.html         # strona dokumentacji projektu
```

---

## **Technologie i założenia**

* **cryptography.Fernet** – bezpieczne szyfrowanie symetryczne (AES + HMAC)
* prosty **CLI** oparty o `input()` + `print()`
* jawne rozdzielenie funkcji:

  * generowanie klucza,
  * szyfrowanie pliku,
  * deszyfrowanie pliku,
  * minimalna warstwa interfejsu
* brak zależności od frameworków, brak stanu globalnego poza plikiem z kluczem

---

## **Uwaga dotycząca bezpieczeństwa**

Plik `klucz.key` daje pełny dostęp do odszyfrowania danych.
W realnym środowisku powinien trafić do:

* menedżera sekretów,
* systemowego KMS (np. AWS KMS, Azure Key Vault, GCP KMS),
* lub być przechowywany poza repo.

---



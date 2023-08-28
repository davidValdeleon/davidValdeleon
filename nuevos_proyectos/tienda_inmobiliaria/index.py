import requests
from bs4 import BeautifulSoup

url = "https://www.fincaraiz.com.co/arriendos/bogota/"

response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

property_listings = soup.find_all("div", class_="property-listing")

for property_listing in property_listings:
    title = property_listing.find("h2", class_="title").text
    location = property_listing.find("p", class_="location").text
    price = property_listing.find("p", class_="price").text
    
    print("Título:", title)
    print("Ubicación:", location)
    print("Precio:", price)
    print("\n")
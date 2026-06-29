export const ALL_COUNTRIES = [
  {
    id: 1,
    name: 'India',
    description: 'A land of rich culture, ancient temples, and diverse landscapes.',
    image: 'assets/images/country1.jpg',
    places: [
      {
        id: 101,
        name: 'Taj Mahal',
        city: 'Agra',
        state: 'Uttar Pradesh',
        description: 'An immense mausoleum of white marble built in the 17th century by Mughal Emperor Shah Jahan.',
        image: 'assets/images/taj-mahal.jpg',
        price: 500,
        popularity: 5,
        hotels: [
          { name: 'Hotel Taj Vilas', price: 2500, rating: 5, description: 'Offers stunning views of the Taj Mahal from its rooftop restaurant.' },
          { name: 'The Oberoi Amarvilas', price: 4000, rating: 5, description: 'Experience unparalleled luxury with private balconies facing the iconic monument.' },
          { name: 'Taj Hotel & Convention Centre', price: 3000, rating: 4, description: 'A modern hotel with premium amenities, ideal for leisure and business travelers.' },
        ]
      },
      {
        id: 102,
        name: 'Red Fort',
        city: 'Delhi',
        state: 'Delhi',
        description: 'A historic fort that served as the main residence of the Mughal emperors.',
        image: 'assets/images/red-fort.jpg',
        price: 450,
        popularity: 5,
        hotels: [
          { name: 'The LaLiT New Delhi', price: 2800, rating: 5, description: 'Located in the heart of the city, known for its elegant decor and world-class spa.' },
          { name: 'Hyatt Regency Delhi', price: 3500, rating: 5, description: 'A landmark hotel with award-winning restaurants and extensive recreational facilities.' },
          { name: 'The Claridges New Delhi', price: 3200, rating: 4, description: 'A historic hotel offering a blend of classic charm and contemporary comfort.' },
        ]
      },
      {
        id: 103,
        name: 'Golden Temple',
        city: 'Amritsar',
        state: 'Punjab',
        description: 'The holiest gurdwara of Sikhism, famous for its beautiful gold-plated dome.',
        image: 'assets/images/golden-temple.jpg',
        price: 200,
        popularity: 5,
        hotels: [
          { name: 'Hyatt Regency Amritsar', price: 2200, rating: 5, description: 'Contemporary hotel offering easy access to the Golden Temple and other key attractions.' },
          { name: 'Radisson Blu Hotel Amritsar', price: 2500, rating: 5, description: 'Features stylish rooms, a beautiful outdoor pool, and excellent dining options.' },
          { name: 'Courtyard by Marriott Amritsar', price: 2000, rating: 4, description: 'Modern comfort with spacious rooms, perfect for pilgrims and tourists alike.' },
        ]
      },
      {
        id: 104,
        name: 'Gateway of India',
        city: 'Mumbai',
        state: 'Maharashtra',
        description: 'An arch-monument built to commemorate the landing of King George V and Queen Mary.',
        image: 'assets/images/gateway-of-india.jpg',
        price: 300,
        popularity: 4,
        hotels: [
          { name: 'The Taj Mahal Palace', price: 5000, rating: 5, description: 'An iconic, sea-facing landmark hotel offering opulent rooms and legendary service.' },
          { name: 'Trident Nariman Point', price: 4500, rating: 5, description: 'Breathtaking views of the ocean and the city\'s famous \'Queen\'s Necklace\' shoreline.' },
          { name: 'The Oberoi Mumbai', price: 5500, rating: 5, description: 'A stunning example of modern luxury, known for its exceptional service and ocean views.' },
        ]
      },
      {
        id: 105,
        name: 'Hawa Mahal',
        city: 'Jaipur',
        state: 'Rajasthan',
        description: 'A stunning five-story palace known as the "Palace of Winds."',
        image: 'assets/images/hawa-mahal.jpg',
        price: 450,
        popularity: 5,
        hotels: [
          { name: 'Jai Mahal Palace', price: 3000, rating: 5, description: 'A heritage hotel set in 18 acres of Mughal gardens, offering a royal experience.' },
          { name: 'The Raj Palace', price: 4200, rating: 5, description: 'A grand heritage hotel that transports guests to the era of Maharajas with its lavish suites.' },
          { name: 'Radisson Jaipur City Center', price: 2800, rating: 4, description: 'Centrally located with modern amenities and a rooftop pool offering city views.' },
        ]
      },
      {
        id: 106,
        name: 'Mysore Palace',
        city: 'Mysore',
        state: 'Karnataka',
        description: 'The royal palace of the Wadiyar dynasty and a magnificent example of Indo-Saracenic architecture.',
        image: 'assets/images/mysore-palace.jpg',
        price: 500,
        popularity: 4,
        hotels: [
          { name: 'Radisson Blu Plaza Hotel Mysore', price: 2000, rating: 5, description: 'Overlooks the Chamundi Hills and offers an outdoor pool, spa, and multiple dining options.' },
          { name: 'Country Inn & Suites by Radisson', price: 1800, rating: 4, description: 'Provides a comfortable stay with warm hospitality and convenient access to the palace.' },
        ]
      },
      {
        id: 107,
        name: 'Tanjore',
        city: 'Thanjavur',
        state: 'Tamil Nadu',
        description: 'Home to the magnificent Brihadeeswarar Temple, a UNESCO World Heritage Site.',
        image: 'assets/images/tanjore.jpg',
        price: 350,
        popularity: 4,
        hotels: [
          { name: 'Svatma', price: 2500, rating: 5, description: 'A luxury heritage hotel that celebrates Tamil culture through its architecture, art, and cuisine.' },
          { name: 'Sangam Hotel', price: 2000, rating: 4, description: 'Offers a blend of comfort and tradition, located conveniently for exploring the city\'s temples.' },
        ]
      },
      {
        id: 108,
        name: 'Meenakshi Amman Temple',
        city: 'Madurai',
        state: 'Tamil Nadu',
        description: 'A historic Hindu temple with a magnificent gateway and a hall of a thousand pillars.',
        image: 'assets/images/meenakshi-amman-temple.jpg',
        price: 250,
        popularity: 5,
        hotels: [
          { name: 'The Gateway Hotel Pasumalai', price: 2800, rating: 5, description: 'A heritage hotel perched atop Pasumalai hill, offering panoramic views of Madurai.' },
          { name: 'Courtyard by Marriott Madurai', price: 2500, rating: 4, description: 'Modern hotel with spacious rooms and a rooftop pool, close to the temple complex.' },
        ]
      },
      {
        id: 109,
        name: 'Alleppey Backwaters',
        city: 'Alleppey',
        state: 'Kerala',
        description: 'A serene network of canals and lakes with traditional houseboats.',
        image: 'assets/images/alleppey-backwaters.jpg',
        price: 1200,
        popularity: 5,
        hotels: [
          { name: 'The Zuri Kumarakom', price: 3500, rating: 5, description: 'A luxurious resort on the shores of Vembanad Lake, offering serene backwater views.' },
          { name: 'Aveda Resorts and Spa', price: 3000, rating: 5, description: 'Features a beautiful infinity pool that stretches out towards the backwaters.' },
        ]
      },
      {
        id: 110,
        name: 'Qutub Minar',
        city: 'Delhi',
        state: 'Delhi',
        description: 'A towering minaret and a UNESCO World Heritage Site in Delhi.',
        image: 'assets/images/qutub-minar.jpg',
        price: 200,
        popularity: 4,
        hotels: [
          { name: 'The Leela Palace New Delhi', price: 4000, rating: 5, description: 'A modern palace hotel that exemplifies the magnificent architecture of the region.' },
          { name: 'Roseate House New Delhi', price: 3500, rating: 5, description: 'A luxury hotel known for its unique architecture and upscale amenities near the airport.' },
        ]
      },
    ],
  },
  {
    id: 2,
    name: 'France',
    description: 'The global center for art, fashion, and sophisticated cuisine.',
    image: 'assets/images/country2.jpg',
    places: [
      {
        id: 201,
        name: 'Eiffel Tower',
        city: 'Paris',
        state: 'Île-de-France',
        description: 'An iconic wrought-iron lattice tower on the Champ de Mars in Paris.',
        image: 'assets/images/eiffel-tower.jpg',
        price: 800,
        popularity: 5,
        hotels: [
          { name: 'Hôtel Le Relais Saint-Germain', price: 4000, rating: 5, description: 'A charming boutique hotel in the heart of the Saint-Germain-des-Prés district.' },
          { name: 'Hôtel Plaza Athénée', price: 6000, rating: 5, description: 'Iconic luxury hotel on Avenue Montaigne with signature red awnings and Eiffel Tower views.' },
          { name: 'Novotel Paris Centre Tour Eiffel', price: 2500, rating: 4, description: 'Modern hotel with panoramic views of the Seine and the Eiffel Tower.' },
        ]
      },
      {
        id: 202,
        name: 'Louvre Museum',
        city: 'Paris',
        state: 'Île-de-France',
        description: 'The world\'s most-visited museum, located in Paris, with a vast collection of art, including the Mona Lisa.',
        image: 'assets/images/louvre-museum.jpg',
        price: 750,
        popularity: 5,
        hotels: [
          { name: 'Mandarin Oriental, Paris', price: 6500, rating: 5, description: 'A contemporary palace hotel known for its serene garden and luxurious spa.' },
          { name: 'Hôtel Regina Louvre', price: 4500, rating: 5, description: 'An elegant hotel with Belle Époque decor, located directly opposite the Louvre.' },
        ]
      },
      {
        id: 203,
        name: 'Palace of Versailles',
        city: 'Versailles',
        state: 'Île-de-France',
        description: 'A royal chateau in Versailles, the residence of the King of France from 1682.',
        image: 'assets/images/palace-of-versailles.jpg',
        price: 600,
        popularity: 4,
        hotels: [
          { name: 'Hôtel Le Louis Versailles Château', price: 3000, rating: 5, description: 'Located opposite the Château de Versailles, offering modern comfort in a historic setting.' },
          { name: 'Waldorf Astoria Versailles', price: 4000, rating: 5, description: 'A historic hotel set in a tranquil location, featuring a Gordon Ramsay restaurant.' },
        ]
      },
      {
        id: 204,
        name: 'Mont Saint-Michel',
        city: 'Normandy',
        state: 'Normandy',
        description: 'A tidal island and mainland commune in Normandy, famous for its abbey.',
        image: 'assets/images/mont-saint-michel.jpg',
        price: 550,
        popularity: 4,
        hotels: [
          { name: 'Le Relais Saint-Michel', price: 2000, rating: 4, description: 'Offers exceptional views of the bay and Mont Saint-Michel abbey.' },
          { name: 'Mercure Mont Saint Michel', price: 2500, rating: 4, description: 'Comfortable and convenient, located on the causeway leading to the island.' },
        ]
      },
      {
        id: 205,
        name: 'Notre-Dame Cathedral',
        city: 'Paris',
        state: 'Île-de-France',
        description: 'A medieval Catholic cathedral on the Île de la Cité in Paris, famous for its Gothic architecture.',
        image: 'assets/images/notre-dame-cathedral.jpg',
        price: 400,
        popularity: 4,
        hotels: [
          { name: 'Hôtel Notre-Dame Saint-Michel', price: 2800, rating: 4, description: 'Charming hotel in the Latin Quarter, just steps from the cathedral.' },
          { name: 'Hôtel Saint-André des Arts', price: 3200, rating: 4, description: 'A historic hotel with unique, artistic rooms in a vibrant neighborhood.' },
        ]
      },
      {
        id: 206,
        name: 'French Riviera',
        city: 'Nice',
        state: 'Provence-Alpes-Côte d\'Azur',
        description: 'The beautiful coastline of southeastern France on the Mediterranean Sea, known for its glamorous resorts.',
        image: 'assets/images/french-riviera.jpg',
        price: 950,
        popularity: 5,
        hotels: [
          { name: 'Hôtel Negresco', price: 5000, rating: 5, description: 'A legendary luxury hotel on the Promenade des Anglais with a world-renowned art collection.' },
          { name: 'Hyatt Regency Nice Palais de la Méditerranée', price: 4500, rating: 5, description: 'An Art Deco landmark with a terrace pool offering stunning sea views.' },
        ]
      },
      {
        id: 207,
        name: 'Arc de Triomphe',
        city: 'Paris',
        state: 'Île-de-France',
        description: 'A neoclassical monument , commemorating those who fought for France in the French Revolutionary and Napoleonic Wars.',
        image: 'assets/images/arc-de-triomphe.jpg',
        price: 300,
        popularity: 4,
        hotels: [
          { name: 'Four Seasons Hotel George V', price: 7000, rating: 5, description: 'An opulent luxury hotel just off the Champs-Élysées with exquisite dining.' },
          { name: 'Hotel Raphael', price: 5500, rating: 5, description: 'A classic Parisian hotel with a rooftop terrace offering panoramic city views.' },
        ]
      },
      {
        id: 208,
        name: 'Château de Chambord',
        city: 'Chambord',
        state: 'Centre-Val de Loire',
        description: 'A Renaissance chateau in the Loire Valley, famous for its distinctive French Renaissance architecture.',
        image: 'assets/images/chateau-de-chambord.jpg',
        price: 450,
        popularity: 3,
        hotels: [
          { name: 'Le Relais de Chambord', price: 3500, rating: 5, description: 'The only hotel with a direct view of the magnificent Château de Chambord.' },
          { name: 'Château de La Motte', price: 2800, rating: 4, description: 'A charming and historic castle hotel offering an authentic French experience.' },
        ]
      },
      {
        id: 209,
        name: 'Sacré-Cœur',
        city: 'Paris',
        state: 'Île-de-France',
        description: 'A Roman Catholic church and minor basilica, a prominent landmark in Paris.',
        image: 'assets/images/sacre-coeur.jpg',
        price: 250,
        popularity: 4,
        hotels: [
          { name: 'Hôtel Le Squara', price: 2000, rating: 4, description: 'A stylish boutique hotel located in the artistic Montmartre district.' },
          { name: 'Terrass Hotel', price: 3000, rating: 4, description: 'Features a stunning rooftop bar and restaurant with incredible views of Paris.' },
        ]
      },
      {
        id: 210,
        name: 'Cité de Carcassonne',
        city: 'Carcassonne',
        state: 'Occitanie',
        description: 'A medieval citadel in Carcassonne, France, known for its fortifications and towers.',
        image: 'assets/images/cite-de-carcassonne.jpg',
        price: 350,
        popularity: 3,
        hotels: [
          { name: 'Hotel De La Cité Carcassonne', price: 2800, rating: 5, description: 'A magical hotel located within the ancient city walls, offering a medieval experience.' },
          { name: 'Hôtel Le Donjon', price: 2200, rating: 4, description: 'Comprises several historic buildings within the ramparts, with a charming garden.' },
        ]
      },
    ],
  },
  {
    id: 3,
    name: 'Italy',
    description: 'Home to Roman history, incredible art, and delicious cuisine.',
    image: 'assets/images/country3.jpg',
    places: [
      {
        id: 301,
        name: 'Colosseum',
        city: 'Rome',
        state: 'Lazio',
        description: 'An oval amphitheatre in the centre of the city of Rome, the largest amphitheatre ever built.',
        image: 'assets/images/colosseum.jpg',
        price: 650,
        popularity: 5,
        hotels: [
          { name: 'Hotel Artemide', price: 3000, rating: 5, description: 'An elegant hotel with a rooftop bar and spa, known for its excellent service.' },
          { name: 'The St. Regis Rome', price: 5000, rating: 5, description: 'A grand and historic hotel that defines luxury in the heart of Rome.' },
        ]
      },
      {
        id: 302,
        name: 'Leaning Tower of Pisa',
        city: 'Pisa',
        state: 'Tuscany',
        description: 'The bell tower of the Pisa Cathedral, famous for its unintended tilt.',
        image: 'assets/images/leaning-tower-of-pisa.jpg',
        price: 500,
        popularity: 4,
        hotels: [
          { name: 'Pisa Tower Plaza', price: 2500, rating: 4, description: 'A modern hotel with an outdoor pool and views of the Leaning Tower.' },
          { name: 'Hotel Relais dell’Orologio', price: 2000, rating: 4, description: 'A charming hotel set in a restored 14th-century tower house.' },
        ]
      },
      {
        id: 303,
        name: 'Canals of Venice',
        city: 'Venice',
        state: 'Veneto',
        description: 'Venice is a city built on more than 100 small islands in a lagoon in the Adriatic Sea.',
        image: 'assets/images/canals-of-venice.jpg',
        price: 700,
        popularity: 5,
        hotels: [
          { name: 'Belmond Hotel Cipriani', price: 6000, rating: 5, description: 'A glamorous retreat with beautiful gardens and an Olympic-sized swimming pool.' },
          { name: 'The Gritti Palace', price: 7000, rating: 5, description: 'A historic luxury hotel on the Grand Canal with exquisite Venetian styling.' },
        ]
      },
      {
        id: 304,
        name: 'Vatican City',
        city: 'Vatican City',
        state: 'Vatican City',
        description: 'The world\'s smallest independent state, home to the Pope and St. Peter\'s Basilica.',
        image: 'assets/images/vatican-city.jpg',
        price: 550,
        popularity: 4,
        hotels: [
          { name: 'Residenza Paolo VI', price: 3500, rating: 4, description: 'A unique hotel located in a former monastery with views of St. Peter\'s Square.' },
          { name: 'Hotel Indigo Rome', price: 2800, rating: 4, description: 'A stylish boutique hotel with a rooftop pool and bar.' },
        ]
      },
      {
        id: 305,
        name: 'Cinque Terre',
        city: 'La Spezia',
        state: 'Liguria',
        description: 'A coastal area within Liguria, composed of five villages with dramatic cliffs and vibrant houses.',
        image: 'assets/images/cinque-terre.jpg',
        price: 600,
        popularity: 5,
        hotels: [
          { name: 'Hotel Porto Roca', price: 3200, rating: 5, description: 'Offers breathtaking sea views from its cliffside location above Monterosso.' },
          { name: 'Hotel La Colonnina', price: 2800, rating: 4, description: 'A centrally located hotel in Monterosso, perfect for exploring the five villages.' },
        ]
      },
      {
        id: 306,
        name: 'Florence Cathedral',
        city: 'Florence',
        state: 'Tuscany',
        description: 'The main church of Florence, Italy, known for its iconic dome designed by Brunelleschi.',
        image: 'assets/images/florence-cathedral.jpg',
        price: 450,
        popularity: 4,
        hotels: [
          { name: 'Hotel Brunelleschi', price: 4000, rating: 5, description: 'A luxury hotel set in a Byzantine tower and medieval church, steps from the Duomo.' },
          { name: 'Four Seasons Hotel Florence', price: 6000, rating: 5, description: 'A serene urban resort with a beautiful private garden and a Michelin-starred restaurant.' },
        ]
      },
      {
        id: 307,
        name: 'Trevi Fountain',
        city: 'Rome',
        state: 'Lazio',
        description: 'A Baroque fountain in the Trevi district in Rome, a major tourist attraction.',
        image: 'assets/images/trevi-fountain.jpg',
        price: 300,
        popularity: 5,
        hotels: [
          { name: 'Hotel Fontana', price: 2500, rating: 4, description: 'Located directly opposite the Trevi Fountain, offering unparalleled views.' },
          { name: 'Hotel Trevi', price: 2000, rating: 3, description: 'A classic hotel in a historic building just a few steps from the fountain.' },
        ]
      },
      {
        id: 308,
        name: 'Duomo di Milano',
        city: 'Milan',
        state: 'Lombardy',
        description: 'The largest church in Italy and the fifth largest in the world, with Gothic architecture.',
        image: 'assets/images/duomo-di-milano.jpg',
        price: 500,
        popularity: 4,
        hotels: [
          { name: 'Park Hyatt Milan', price: 5000, rating: 5, description: 'A sophisticated luxury hotel located in the heart of Milan, near the Duomo.' },
          { name: 'Hotel Dei Cavalieri', price: 3000, rating: 4, description: 'A historic hotel with a rooftop terrace offering panoramic views of the city.' },
        ]
      },
      {
        id: 309,
        name: 'Pompeii',
        city: 'Pompeii',
        state: 'Campania',
        description: 'An ancient Roman city near Naples, buried under volcanic ash from Mount Vesuvius.',
        image: 'assets/images/pompeii.jpg',
        price: 600,
        popularity: 4,
        hotels: [
          { name: 'Hotel Forum', price: 1800, rating: 3, description: 'Located just a short walk from the entrance to the Pompeii archaeological site.' },
          { name: 'Hotel del Sole', price: 1500, rating: 3, description: 'Offers views of the ruins and a convenient location for exploring the area.' },
        ]
      },
      {
        id: 310,
        name: 'Uffizi Gallery',
        city: 'Florence',
        state: 'Tuscany',
        description: 'A prominent art museum located adjacent to the Piazza della Signoria in Florence.',
        image: 'assets/images/uffizi-gallery.jpg',
        price: 550,
        popularity: 4,
        hotels: [
          { name: 'Hotel Bernini Palace', price: 3500, rating: 5, description: 'A historic hotel in a 15th-century palace, blending classic style with modern luxury.' },
          { name: 'Portrait Firenze', price: 6000, rating: 5, description: 'An exclusive, all-suite hotel overlooking the Arno River, offering bespoke service.' },
        ]
      },
    ],
  },
  {
    id: 4,
    name: 'Spain',
    description: 'A country of diverse cultures, vibrant cities, and stunning architecture.',
    image: 'assets/images/country4.jpg',
    places: [
      {
        id: 401,
        name: 'Sagrada Familia',
        city: 'Barcelona',
        state: 'Catalonia',
        description: 'A large unfinished Roman Catholic minor basilica in Barcelona, designed by Antoni Gaudí.',
        image: 'assets/images/sagrada-familia.jpg',
        price: 600,
        popularity: 5,
        hotels: [
          { name: 'Mandarin Oriental, Barcelona', price: 5000, rating: 5, description: 'A stylish luxury hotel on the fashionable Passeig de Gràcia.' },
          { name: 'Hotel Casa Fuster', price: 3800, rating: 5, description: 'A grand, modernista building with a rooftop pool and jazz club.' },
        ]
      },
      {
        id: 402,
        name: 'Alhambra',
        city: 'Granada',
        state: 'Andalusia',
        description: 'A palace and fortress complex located in Granada, Andalusia, a UNESCO World Heritage Site.',
        image: 'assets/images/alhambra.jpg',
        price: 550,
        popularity: 5,
        hotels: [
          { name: 'Parador de Granada', price: 4500, rating: 5, description: 'A unique opportunity to stay within the grounds of the Alhambra palace.' },
          { name: 'Hotel Alhambra Palace', price: 3500, rating: 5, description: 'An iconic hotel with Moorish-inspired decor and spectacular views of Granada.' },
        ]
      },
      {
        id: 403,
        name: 'Park Güell',
        city: 'Barcelona',
        state: 'Catalonia',
        description: 'A public park system with gardens and architectonic elements located on Carmel Hill.',
        image: 'assets/images/park-guell.jpg',
        price: 400,
        popularity: 4,
        hotels: [
          { name: 'Hotel Sant Antoni', price: 2000, rating: 4, description: 'A comfortable hotel offering easy access to Park Güell and other Gaudí sites.' },
          { name: 'Hotel Neri', price: 3000, rating: 5, description: 'A chic boutique hotel in a medieval palace in the heart of the Gothic Quarter.' },
        ]
      },
      {
        id: 404,
        name: 'Plaza Mayor',
        city: 'Madrid',
        state: 'Community of Madrid',
        description: 'A major public space in the heart of Madrid, a hub of cultural life and public gatherings.',
        image: 'assets/images/plaza-mayor.jpg',
        price: 350,
        popularity: 4,
        hotels: [
          { name: 'Only YOU Hotel Atocha', price: 2800, rating: 5, description: 'A trendy hotel with a unique design and a vibrant atmosphere.' },
          { name: 'Hotel Riu Plaza España', price: 2500, rating: 4, description: 'Located in a historic skyscraper with a rooftop pool and sky bar.' },
        ]
      },
      {
        id: 405,
        name: 'City of Arts and Sciences',
        city: 'Valencia',
        state: 'Valencian Community',
        description: 'An entertainment-based cultural and architectural complex in the city of Valencia.',
        image: 'assets/images/city-of-arts-and-sciences.jpg',
        price: 450,
        popularity: 4,
        hotels: [
          { name: 'Las Arenas Balneario Resort', price: 3500, rating: 5, description: 'A luxurious beachfront hotel with direct access to Las Arenas beach.' },
          { name: 'Barceló Valencia', price: 2800, rating: 4, description: 'A modern hotel with a rooftop pool, located opposite the City of Arts and Sciences.' },
        ]
      },
      {
        id: 406,
        name: 'Santiago de Compostela Cathedral',
        city: 'Santiago de Compostela',
        state: 'Galicia',
        description: 'A Roman Catholic cathedral and the reputed burial place of Saint James the Great.',
        image: 'assets/images/santiago-de-compostela-cathedral.jpg',
        price: 250,
        popularity: 3,
        hotels: [
          { name: 'Parador de Santiago', price: 2000, rating: 5, description: 'One of the oldest hotels in the world, located in the main square next to the Cathedral.' },
          { name: 'Gran Hotel Los Abetos', price: 1800, rating: 4, description: 'Set in a quiet location with beautiful gardens and an outdoor pool.' },
        ]
      },
      {
        id: 407,
        name: 'Ibiza',
        city: 'Ibiza',
        state: 'Balearic Islands',
        description: 'A beautiful island in the Mediterranean Sea, known for its nightlife and electronic dance music scene.',
        image: 'assets/images/ibiza.jpg',
        price: 700,
        popularity: 5,
        hotels: [
          { name: 'Hard Rock Hotel Ibiza', price: 5000, rating: 5, description: 'A beachfront hotel with a vibrant atmosphere, live music, and multiple pools.' },
          { name: 'Hotel Torre del Mar', price: 4500, rating: 4, description: 'A stylish hotel with sea views, a large pool area, and a spa.' },
        ]
      },
      {
        id: 408,
        name: 'Mezquita de Córdoba',
        city: 'Córdoba',
        state: 'Andalusia',
        description: 'A mosque-cathedral located in the heart of Córdoba, known for its mix of Islamic and Christian architecture.',
        image: 'assets/images/mezquita-de-cordoba.jpg',
        price: 500,
        popularity: 4,
        hotels: [
          { name: 'Balcon de Cordoba', price: 2800, rating: 4, description: 'A charming hotel with a beautiful courtyard, located in the historic Jewish Quarter.' },
          { name: 'Hesperia Córdoba', price: 2500, rating: 4, description: 'A modern hotel on the banks of the Guadalquivir River, offering great views.' },
        ]
      },
      {
        id: 409,
        name: 'Royal Palace of Madrid',
        city: 'Madrid',
        state: 'Community of Madrid',
        description: 'The official residence of the Spanish Royal Family, with a stunning interior and grand royal collections.',
        image: 'assets/images/royal-palace-of-madrid.jpg',
        price: 450,
        popularity: 4,
        hotels: [
          { name: 'Hotel Wellington', price: 3500, rating: 5, description: 'A classic luxury hotel in the elegant Salamanca district, with an outdoor pool.' },
          { name: 'Hotel Urban', price: 3000, rating: 5, description: 'A design hotel with an art collection, a rooftop pool, and a Michelin-starred restaurant.' },
        ]
      },
      {
        id: 410,
        name: 'La Concha Beach',
        city: 'San Sebastián',
        state: 'Basque Country',
        description: 'One of the most famous urban beaches in Europe, located in the Bay of La Concha.',
        image: 'assets/images/la-concha-beach.jpg',
        price: 350,
        popularity: 4,
        hotels: [
          { name: 'Hotel Maria Cristina', price: 4000, rating: 5, description: 'An iconic, Belle Époque hotel offering luxury and stunning views of the bay.' },
          { name: 'Hotel Arrizul Congress', price: 2500, rating: 4, description: 'A modern hotel located near Zurriola Beach, popular with surfers.' },
        ]
      },
    ],
  },
  {
    id: 5,
    name: 'US',
    description: 'A vast country with a diverse range of cultures, landscapes, and iconic landmarks.',
    image: 'assets/images/country5.jpg',
    places: [
      {
        id: 501,
        name: 'Statue of Liberty',
        city: 'New York City',
        state: 'New York',
        description: 'A colossal neoclassical sculpture on Liberty Island in New York Harbor, a gift from France to the United States.',
        image: 'assets/images/statue-of-liberty.jpg',
        price: 700,
        popularity: 5,
        hotels: [
          { name: 'The Ritz-Carlton New York', price: 6000, rating: 5, description: 'Offers breathtaking views of Central Park and an unparalleled level of luxury.' },
          { name: 'The Standard High Line', price: 5000, rating: 5, description: 'A trendy hotel known for its floor-to-ceiling windows and stunning city views.' },
        ]
      },
      {
        id: 502,
        name: 'Grand Canyon',
        city: 'Arizona',
        state: 'Arizona',
        description: 'A steep-sided canyon carved by the Colorado River, one of the world\'s most famous natural wonders.',
        image: 'assets/images/grand-canyon.jpg',
        price: 750,
        popularity: 5,
        hotels: [
          { name: 'El Tovar Hotel', price: 4000, rating: 4, description: 'A historic hotel located directly on the rim of the Grand Canyon.' },
          { name: 'Grand Canyon Village', price: 3000, rating: 3, description: 'Offers rustic lodging and cabins with easy access to the South Rim trails.' },
        ]
      },
      {
        id: 503,
        name: 'French Quarter',
        city: 'New Orleans',
        state: 'Louisiana',
        description: 'The oldest neighborhood in New Orleans, known for its iron balconies, jazz music, and lively atmosphere.',
        image: 'assets/images/french-quarter.jpg',
        price: 600,
        popularity: 4,
        hotels: [
          { name: 'Royal Sonesta New Orleans', price: 3500, rating: 5, description: 'An elegant hotel on Bourbon Street with a beautiful courtyard pool and a jazz club.' },
          { name: 'Hotel Monteleone', price: 3000, rating: 5, description: 'A historic, family-owned hotel famous for its revolving Carousel Bar.' },
        ]
      },
      {
        id: 504,
        name: 'Golden Gate Bridge',
        city: 'San Francisco',
        state: 'California',
        description: 'A suspension bridge spanning the Golden Gate, connecting San Francisco Bay and the Pacific Ocean.',
        image: 'assets/images/golden-gate-bridge.jpg',
        price: 650,
        popularity: 4,
        hotels: [
          { name: 'Fairmont San Francisco', price: 4000, rating: 5, description: 'A world-renowned hotel atop Nob Hill, offering panoramic views of the city and bay.' },
          { name: 'The Ritz-Carlton, San Francisco', price: 5000, rating: 5, description: 'A luxury hotel in a historic neoclassical building in the heart of downtown.' },
        ]
      },
      {
        id: 505,
        name: 'Mount Rushmore',
        city: 'Keystone',
        state: 'South Dakota',
        description: 'A sculpture carved into the granite face of Mount Rushmore, featuring the faces of four US presidents.',
        image: 'assets/images/mount-rushmore.jpg',
        price: 400,
        popularity: 4,
        hotels: [
          { name: 'Holiday Inn Express & Suites', price: 1500, rating: 3, description: 'A comfortable and convenient base for exploring the Black Hills.' },
          { name: 'Kemp Hotel', price: 1800, rating: 3, description: 'Offers modern amenities close to the Mount Rushmore National Memorial.' },
        ]
      },
      {
        id: 506,
        name: 'Hollywood Walk of Fame',
        city: 'Los Angeles',
        state: 'California',
        description: 'A famous sidewalk along Hollywood Boulevard in Los Angeles, embedded with stars for entertainment personalities.',
        image: 'assets/images/hollywood-walk-of-fame.jpg',
        price: 500,
        popularity: 4,
        hotels: [
          { name: 'The Hollywood Roosevelt', price: 3000, rating: 5, description: 'A historic, star-studded hotel that was the site of the first Academy Awards.' },
          { name: 'Loews Hollywood Hotel', price: 2800, rating: 4, description: 'A modern hotel with a rooftop pool and direct access to the Hollywood & Highland center.' },
        ]
      },
      {
        id: 507,
        name: 'Washington D.C. Monuments',
        city: 'Washington D.C.',
        state: 'Washington D.C.',
        description: 'The capital city of the United States, with a concentration of monuments and museums.',
        image: 'assets/images/washington-d-c-monuments.jpg',
        price: 600,
        popularity: 3,
        hotels: [
          { name: 'The Hay-Adams', price: 4500, rating: 5, description: 'An iconic luxury hotel with unparalleled views of the White House.' },
          { name: 'Hilton Washington DC National Mall', price: 3200, rating: 4, description: 'A modern hotel with a rooftop pool, located near major museums and monuments.' },
        ]
      },
      {
        id: 508,
        name: 'Space Center',
        city: 'Houston',
        state: 'Texas',
        description: 'A museum of science and space exploration and the official visitor center of NASA Johnson Space Center in Houston.',
        image: 'assets/images/space-center.jpg',
        price: 550,
        popularity: 4,
        hotels: [
          { name: 'Hilton Americas-Houston', price: 2800, rating: 5, description: 'A large, modern hotel connected to the George R. Brown Convention Center.' },
          { name: 'Hyatt Regency Houston', price: 2500, rating: 4, description: 'Known for its iconic atrium and revolving rooftop restaurant.' },
        ]
      },
      {
        id: 509,
        name: 'Niagara Falls',
        city: 'Niagara Falls',
        state: 'New York',
        description: 'A group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the U.S. and Canada.',
        image: 'assets/images/niagara-falls.jpg',
        price: 800,
        popularity: 5,
        hotels: [
          { name: 'Hyatt Regency Buffalo', price: 3500, rating: 4, description: 'A modern hotel in a historic building, located in the heart of downtown Buffalo.' },
          { name: 'Seneca Niagara Resort & Casino', price: 3000, rating: 4, description: 'A large resort with a casino, spa, and multiple dining options.' },
        ]
      },
      {
        id: 510,
        name: 'The Alamo',
        city: 'San Antonio',
        state: 'Texas',
        description: 'A historic Spanish mission and fortress compound, known for the Battle of the Alamo in 1836.',
        image: 'assets/images/the-alamo.jpg',
        price: 300,
        popularity: 4,
        hotels: [
          { name: 'Omni La Mansión del Rio', price: 2000, rating: 4, description: 'A historic hotel with Spanish colonial architecture on the famous River Walk.' },
          { name: 'The St. Anthony, a Luxury Collection Hotel', price: 2500, rating: 5, description: 'A designated national historic landmark, known as the "Queen of San Antonio."' },
        ]
      },
    ],
  },
];

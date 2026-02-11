const products = [
  {
    id: 1,
    name: 'Ultra soft Dell Latitude 3190L',
    category: 'dell',
    price: "75 000 fcfa",
    image: '/assets/imageProduct/dell1/dell1.2.jpg',
    specs: {
      processor: 'Intel Quad Core 1.6 GHz',
      ram: '4GB DDR3',
      storage: '128GB SSD NVMe',
      screen: '12.6" Rotatif 360°',
      graphics: 'Intel HD Graphics',
      features: ['Wifi', 'Bluetooth', 'HDMI', 'USB Type-A']
    }
  },
  {
    id: 2,
    name: 'HP Zbook Studio 15 G5',
    category: 'hp',
    price: "175 000 fcfa",
    image: '/assets/imageProduct/hp1/hp2.1.jpg',
    specs: {
      processor: 'Intel Core i7-8750H @ 2.2-4.5 GHz (12 CPUs)',
      ram: '16 GB DDR4',
      storage: '1 TB NVMe SSD PCIe Gen 4.0',
      screen: '15.6" 4K avec éclairage adaptatif',
      graphics: 'Nvidia Quadro P1000 4GB GDDR5 + Intel Iris Xe 128MB',
      features: ['Face ID', 'Fingerprint Reader', 'Caméra 720p HD IR', 'Audio Bang & Olufsen', '3x USB-C 3.2', 'USB-A 3.2']
    }
  },
  {
    id: 3,
    name: 'HP Elitebook 840 G5',
    category: 'hp',
    price: '185 000 fcfa',
    image: '/assets/imageProduct/hp1/hp1.1.jpg',
    specs: {
      processor: 'Intel Core i7-8665U @ 2.1-4.5 GHz (8 CPUs) - 8ème gen',
      ram: '32GB DDR4 extensible',
      storage: '512GB SSD NVMe ultra rapide extensible',
      screen: '14" FHD (1920 x 1080)',
      graphics: 'Intel UHD Graphics 620',
      features: ['Windows 11 Pro', 'Lecteur d\'empreinte', 'Webcam', 'HDMI', 'USB 3.0', 'USB Type-C', 'RJ45', 'WiFi', 'Bluetooth']
    }
  },
  {
    id: 4,
    name: 'Lenovo Legion 5 15IMH05H Gaming',
    category: 'lenovo',
    price: '550 000 fcfa',
    image: '/assets/imageProduct/legion/legion.jpg',
    specs: {
      processor: 'AMD Ryzen 7 5800H @ 3.2 GHz (16 CPUs)',
      ram: '16GB DDR4-3200 extensible',
      storage: '512GB SSD NVMe',
      screen: '15.6" UHD 4K IPS - 120Hz',
      graphics: 'Nvidia GeForce RTX 3060 6GB GDDR6 + AMD Radeon 2GB',
      features: ['Clavier RGB 4-zones', '4x USB 3.1', 'USB-C 3.1', 'RJ-45', 'WiFi 5.0', 'Bluetooth 5.0']
    }
  },
  {
    id: 5,
    name: 'Lenovo Thinkpad',
    category: 'lenovo',
    price: '140 000 fcfa',
    image: '/assets/imageProduct/lenovo/lenovo1.jpg',
    specs: {
      processor: 'Intel Core i5 6ème gen @ 2.1 GHz',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      screen: 'Écran tactile',
      graphics: 'Intel HD Graphics',
      features: ['Batterie 6h', 'WiFi', 'Bluetooth']
    }
  },
  {
    id: 6,
    name: 'Ordinateur Portable Gaming MNO',
    category: 'apple',
    price: '1 999 000 fcfa',
    image: '/assets/imageProduct/apple/apple1.1.jpg',
    specs: {
      processor: 'Processeur haute performance',
      ram: 'RAM optimisée',
      storage: 'Stockage SSD',
      screen: 'Écran haute résolution',
      graphics: 'Carte graphique dédiée',
      features: ['Design premium', 'Performance gaming']
    }
  },
  {
    id: 7,
    name: 'Dell Latitude 7480 FHD',
    category: 'dell',
    price: '170 000 fcfa',
    image: '/assets/imageProduct/lenovo/lenovo2.jpg',
    specs: {
      processor: 'Intel Core i7 8ème gen @ 2.1 GHz',
      ram: '16GB DDR4',
      storage: '256GB SSD',
      screen: '14" FHD (1920 x 1080)',
      graphics: 'Intel UHD Graphics 620',
      features: ['Windows 11', 'Webcam', 'WiFi', 'Bluetooth']
    }
  },
  {
    id: 8,
    name: 'Dell 3180 Intel Celeron 3060',
    category: 'dell',
    price: "60 000 fcfa",
    image: '/assets/imageProduct/dell1/dell2.3.jpg',
    specs: {
      processor: 'Intel Celeron 3060',
      ram: '4GB DDR3',
      storage: '128GB SSD M.2',
      screen: 'Écran compact',
      graphics: 'Intel HD Graphics',
      features: ['Autonomie 6h', 'USB', 'HDMI', 'Chargeur offert']
    }
  },
  {
    id: 9,
    name: 'Dell G73420',
    category: 'dell',
    price: "180 000 fcfa",
    image: '/assets/imageProduct/dell1/dell4.1.jpg',
    specs: {
      processor: 'Intel Core i5-1135G7 11ème gen @ 2.4-4.5 GHz',
      ram: '16GB DDR4 extensible',
      storage: '256GB SSD extensible',
      screen: '14" FullHD',
      graphics: 'Intel UHD Graphics',
      features: ['Windows 11 Pro 64 bits', 'USB Type-C', 'HDMI', 'USB 3.0', 'Webcam', 'WiFi']
    }
  },
  {
    id: 10,
    name: 'Ordinateur Portable Bureautique XYZ',
    category: 'hp',
    price: '170 000 fcfa',
    image: '/assets/imageProduct/hp1/hp5.jpg',
    specs: {
      processor: 'Processeur performant',
      ram: 'RAM suffisante',
      storage: 'SSD rapide',
      screen: 'Écran confortable',
      graphics: 'Graphiques intégrés',
      features: ['Léger', 'Professionnel', 'Portable']
    }
  },
  {
    id: 11,
    name: 'HP Elitebook 850 G8',
    category: 'hp',
    price: "180 000 fcfa",
    image: '/assets/imageProduct/hp1/hp6.1.jpg',
    specs: {
      processor: 'Intel Core i5-1145G7 @ 2.60 GHz (8 CPUs) - 11ème gen',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      screen: '15.6" Display',
      graphics: 'Intel Iris Graphics 128MB dédié (8GB total)',
      features: ['Pavé numérique', 'Fingerprint', 'Batterie excellente', 'Windows 11', 'Webcam', 'WiFi', 'Bluetooth', 'HDMI', 'USB Type-C']
    }
  },
  {
    id: 12,
    name: 'HP Zbook Firefly 14" G8',
    category: 'hp',
    price: '200 000 fcfa',
    image: '/assets/imageProduct/hp1/hp4.jpg',
    specs: {
      processor: 'Intel Core i7 11ème gen @ 3.0 GHz',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      screen: '14" Display',
      graphics: 'Carte graphique 4GB dédiée',
      features: ['WiFi', 'Bluetooth', 'Windows 11']
    }
  },
  {
    id: 13,
    name: 'Apple MacBook Pro A1398',
    category: 'apple',
    price: "625 000 fcfa",
    image: '/assets/imageProduct/apple/apple3.jpg',
    specs: {
      processor: 'Intel Core i7-3635QM @ 2.4 GHz',
      ram: '16GB DDR3',
      storage: '256GB HDD',
      screen: '15.5" Retina',
      graphics: 'Intel HD Graphics',
      features: ['WiFi', 'macOS', 'Design premium']
    }
  },
  {
    id: 14,
    name: 'Microsoft Surface Pro',
    category: 'surface',
    price: "200 000 fcfa",
    image: '/assets/imageProduct/surface/surface1.jpg',
    specs: {
      processor: 'Intel Core i7 @ 2.4 GHz',
      ram: '16GB DDR3',
      storage: '256GB SSD',
      screen: '15.5" Tactile',
      graphics: 'Intel HD Graphics',
      features: ['WiFi', 'Écran détachable', '2-en-1']
    }
  },
  {
    id: 15,
    name: 'HP Zbook 15 G3 Workstation',
    category: 'hp',
    price: "230 000 fcfa",
    image: '/assets/imageProduct/hp1/hp10.jpg',
    specs: {
      processor: 'Intel Xeon E3-1505M v5 @ 2.8-4.0 GHz (8 CPUs)',
      ram: '32GB DDR4',
      storage: '512GB SSD',
      screen: '15.6" avec pavé numérique',
      graphics: 'Nvidia Quadro M2000M 4GB GDDR5 + Intel HD P530 128MB (20GB total)',
      features: ['Clavier rétro-éclairé', '2x USB Type-C', 'HDMI', 'Bluetooth', 'WiFi', 'Windows 10/11 Pro', 'État 10/10']
    }
  },
  {
    id: 16,
    name: 'Dell Latitude Gaming Edition',
    category: 'dell',
    price: "140 000 fcfa",
    image: '/assets/imageProduct/dell1/dell6.jpg',
    specs: {
      processor: 'Intel Core i5 7ème gen @ 2.8 GHz',
      ram: '16GB DDR4',
      storage: '256GB SSD extensible',
      screen: '14" Display',
      graphics: 'Nvidia GeForce 930MX 2GB dédié',
      features: ['Clavier rétro-éclairé', 'Port carte SIM', 'RJ45', 'HDMI', 'USB']
    }
  }
];

export default products;
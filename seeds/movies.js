const Movie = require('../models/movie')

Movie.create([
  {
    title: 'Wonder Woman',
    yearReleased: 2017,
    description: "Before she was Wonder Woman she was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war to end all wars, discovering her full powers and true destiny."
  },
  {
    title: 'Finding Nemo',
    yearReleased: 2003,
    description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
  },
  {
    title: 'Star Trek: Insurrection',
    yearReleased: 1998,
    description: "When the crew of the Enterprise learn of a Federation conspiracy against the inhabitants of a unique planet, Captain Picard begins an open rebellion."
  }
])
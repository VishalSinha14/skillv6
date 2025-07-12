// Static avatar system to replace Cloudinary
export const AVATAR_OPTIONS = [
  {
    id: "avatar-1",
    name: "Friendly Face",
    url: "/placeholder.svg?height=100&width=100&text=😊",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: "avatar-2",
    name: "Professional",
    url: "/placeholder.svg?height=100&width=100&text=👨‍💼",
    color: "from-green-500 to-blue-500",
  },
  {
    id: "avatar-3",
    name: "Creative",
    url: "/placeholder.svg?height=100&width=100&text=🎨",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "avatar-4",
    name: "Tech Enthusiast",
    url: "/placeholder.svg?height=100&width=100&text=💻",
    color: "from-yellow-500 to-red-500",
  },
  {
    id: "avatar-5",
    name: "Nature Lover",
    url: "/placeholder.svg?height=100&width=100&text=🌱",
    color: "from-green-400 to-emerald-500",
  },
]

export const getRandomAvatars = (count = 5): typeof AVATAR_OPTIONS => {
  const shuffled = [...AVATAR_OPTIONS].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export const getAvatarById = (id: string) => {
  return AVATAR_OPTIONS.find((avatar) => avatar.id === id) || AVATAR_OPTIONS[0]
}

export const getDefaultAvatar = (userName: string) => {
  // Generate consistent avatar based on username
  const index = userName.charCodeAt(0) % AVATAR_OPTIONS.length
  return AVATAR_OPTIONS[index]
}

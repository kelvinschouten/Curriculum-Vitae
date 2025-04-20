"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProfileUpload } from "@/components/profile-upload"
import Image from "next/image"
import Link from "next/link"

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState<string | null>(null)

  const handleImageChange = (file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        setProfileImage(e.target.result as string)
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container max-w-md mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Profielfoto Uploaden</CardTitle>
            <CardDescription>Upload een profielfoto voor je CV website</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {profileImage ? (
              <div className="space-y-4">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-slate-200">
                  <Image src={profileImage || "/placeholder.svg"} alt="Profile Preview" fill className="object-cover" />
                </div>
                <div className="flex justify-center gap-2">
                  <Button variant="outline" onClick={() => setProfileImage(null)}>
                    Verwijderen
                  </Button>
                  <Button>Opslaan</Button>
                </div>
              </div>
            ) : (
              <ProfileUpload onImageChange={handleImageChange} />
            )}

            <div className="pt-4">
              <Button asChild variant="link" className="w-full">
                <Link href="/">Terug naar CV</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


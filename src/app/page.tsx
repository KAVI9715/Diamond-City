
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    name: 'PortfolioPro',
    image: 'https://images.unsplash.com/photo-1550622824-c11e494a4b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8cG9ydGZvbGlvcHJvJTIwdGVtcGxhdGUlMjB3aGl0aCUyMHByb2plY3QlMjBidXNpbmVzc3xlbnwwfHx8fDE3NTQzNjYyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "portfolio website",
    description: 'A modern portfolio template with project showcase, resume integration, and contact form.',
    link: '/project/portfoliopro',
  },
  {
    name: 'BizLaunch Landing Page',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxCSVpMQVVOQ0glMjAlMjBCVVNJTkVTUyUyMFRFU1RJTU9OSUFMU3xlbnwwfHx8fDE3NTQzNjYzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "landing page",
    description: 'A single-page responsive landing site for businesses to showcase services, pricing, and testimonials.',
    link: '/project/bizlaunch-landing-page',
  },
  {
    name: 'TaskMaster App',
    image: 'https://images.unsplash.com/photo-1694365899936-850bc6c2b0f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxUQVNLTUFTVCUyMEFQUHxlbnwwfHx8fDE3NTQzNjY0NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    "data-ai-hint": "task manager",
    description: 'A full CRUD task manager with user authentication, built using React and a backend like Firebase.',
    link: '/project/taskmaster-app',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Video Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
            Built to Shine. Designed to Last.
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
            Crafting brilliant digital experiences that stand the test of time.
          </p>
          <div className="relative mt-8 overflow-hidden rounded-xl" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/erEgovG9WBs?autoplay=1&mute=1&loop=1&playlist=erEgovG9WBs&controls=0"
              title="Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Company Growth Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Growth Story</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From a small startup to a leading force in the industry, our journey is one of passion and perseverance.
              </p>
            </div>
            <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-accent">Benefits</h3>
                        <p className="mt-2 text-muted-foreground">We are committed to delivering cutting-edge solutions that drive success and create lasting value for our clients.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-accent">Projects</h3>
                        <p className="mt-2 text-muted-foreground">Our diverse portfolio showcases our expertise in tackling complex challenges and delivering exceptional results.</p>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Employees Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container grid items-center justify-between gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Fueled by Our People</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The dedication and expertise of our team are the driving forces behind our success. Their hard work transforms ambitious ideas into reality, leading to project growth and client satisfaction.
            </p>
          </div>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSctvmQlsml0FbXTWIMHyVSyuHRGSRgf2gtxg&s"
            data-ai-hint="team collaboration"
            alt="Hardworking Employees"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>

      {/* Popular Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Most Popular Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore some of the groundbreaking projects that define our capabilities and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project) => (
              <Card key={project.name} className="overflow-hidden">
                <Image
                  src={project.image}
                  data-ai-hint={project['data-ai-hint']}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  <Button asChild variant="link" className="p-0 h-auto mt-4">
                    <Link href={project.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Card className="p-8">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <Avatar className="w-48 h-48 mx-auto">
                <AvatarImage src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEA8QEA8QDw8PDw8PEA8PDw8PEA8PFREWFhURFRUYHSggGBolGxUVITEhJSktLi4uFyAzODMsQygtLisBCgoKDQ0OFRAPFTcZFRktLSsrKy03Ky0rLTcrLS0tLSs3LSsrLSs3LSsrNzcrNy03LSsrKy0rKy0rLSstKysrK//AABEIALoBDwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAACAQMEBwAFCAb/xABJEAACAQICAwkOAwUGBwAAAAABAgADEQQSBSExBxMXQVFhcZTTBggiMjVTVXOBkZOhsbMUI0IYUsHE8DNDYnKC8RUkY6PR4eP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEC/9oADAMBAAIRAxEAPwD3G6buhHQpwn/KfifxW/8A9/vOTe97/wADXvvnNsnh/wBoE+ih17/4zO+X26K6Md/LykoF2/tAn0UOvHsYv7QDeih149jKSEWBdn7QB9FDrx7GZw/t6KHXj2MpMCFaBdfD+3oodePYzOH5vRQ68exlK2i2gXVw/N6KHXj2Mzh9b0UOvHsZSwi2gXRw+t6KHXj2MXh8b0UOvHsZTAEO0C5eHpvRS9ePYzOHpvRS9ePYymwsULAuPh6b0UvXj2MXh5f0UvXj2Mp4CFlgW9w9N6KXrx7GLw8v6KXrx7GU9li73AuDh5f0WvXj2Mzh5f0UvXj2MqDe+aZvJgW/w9N6LXrx7GJw9N6KXrx7GU+UglYFxcPTei168exmcPTei168exlNkTLQLj4e29FL149jM4fG9FDrx7GU3lgkQLl4fW9FDrx7GZw/N6KHXj2MpgiAwgXTw/N6KHXj2Mzh/b0UOvHsZSkwwLq/aAb0UOvHsZn7QDeih149jKUtEtAuv9oA+ih149jLY7j9Of8AEMDh8ZvW87+rNveffMlnZbZrC/i8nHOO51ZuQeRNHeqf7zwK/wC+X26K6Md/LykxLt75bborox38vKTEDIomRYBARbRFhQEiiLaKBAVRDVIIjyCAopwgkJYdoDWSDaPWg5IAqI6FiIsfAgM5JgEsDQXcuiIj11DVHFxms1OmT+kjjbn/AN5t8Th8P4rUaZ5Pyx9R8oFVqIVWgw8ZWHSpE962FCNmp+DbiACj25ReabS2LzG9Wktv3wzVVHTxr0gHogeTZI2yzd4zBrlLrqta63B1nXbn1XIPMZqiLwGMsK0IrMCwAtEyxwwS8AGSNOsdZ43UgM5YhEIxMsAbRLQ7QSIAGdV7kHkTR3qn+885UadV7kHkTR3qn+88DwHfLbdFdGO/l5Sgl198tt0V0Y764eUqsDIoi2mCAohWiAQrQMAhiIBCEAgI4sBRHAIBARxRERY4FgZaZlhiYRAACem7kdHgsa9QC1O29qRtfX4djtAt7zzTzYHunoNI6VNIhVHEoW175RssP64+WB6ZsY2Y5WBB1EZiNnLbWflEZyTZSG4rXv7CRNbo/A1almawJ5FFlH0vPWaJ0cqALa+vXz8pgaOpRcfoOvZxj3/+pFxOCupuhvYjllg/hFItlHumtx+jlCMeO2rmgeO0Bg0o53azHNsZQbACwAHttNN3U0kZxUQAEkq9gBfWSrG3NxyRpTGb3UensIBGs22gbOjWZpd8Z1YsSTrJ94+fHAgMsEiP6uMXiEC3JAhPAKx1lgkQGyIDQiIloA5YJjhjRgCYBMJhAMBDOq9yDyJo71T/AHnnKhnVe5D5E0d6p/vPA8B3y23RXRjvrh5SyS6e+V26K6Md9cPKVWAUURIQgKIQEQCEBAKEoiCGGtAJVjiWghoqrAfI1REhKI6tOBgmZI4F5IQSA1vc2VHD74yu5JIIsByXA+pMi73Nv3P4Xfaq0wdd1f2IwJECztH4BVRQRxCbGnRTingcZpHHJnK5nVbAZrKXP+FQDcCbDuW0jicS7U6i72UXOTrIbYLfOVHtTUQC0iYlFYGeG09jcYtVqdJrAEDORcdMiYQ4xgDULt4ViBq2ccCF3ZaEffmqLbKw+YGz3Tz1BWVSCDezXJ2W2H+uaWc+EarRIYG4FwSNerikKpgKdNWtTRrFQ4cXGVj4QPIbHbCq1cRpntqj1Wxva9r6r7bcV5HcSBpoBENhBIgARAIjpgEQGzAMdZY2VgNsIlodoDCA2Z1VuQ+RNHeqf7zzlUzqrch8iaO9U/3ngeA75XxtFdGO+uHlLqJdPfK7dFdGO+uHlKCA4IUbUc8O8AhCEFTDUQCAhATFWGFgOU1kqmkjoI8CeWA5khAiALnaYWWAQeOqZHEkUn5IDqa+ebjuVYrjcPxXZlPtRhaatL/0ZN0biko4nDFiLtWpqBxkswX3a4Fm4rRpqgWsAdpa59wvJOi8ElJWKWNxYtykbZrsTpB2IpKbZtp5Fg4vSj0FVVUMgAVRxgAfOVD2JwNNj4dhmNr7NZ2a47R0YE2kkcU12HxT1v7QLvR15ddyeK5j1HGNTbeySVN8hOvUP0mBPcgavZPM91r7zQxFT9VfJRUDltZieewPum8erxyue6PTxxVX8OQEWjUqBbG+dr2zE8RtxQNAynkjTJJdVCNot0xvKOmRUUrAZZKyRmoIDBWNkR1jGzABo20dMbYQGiIhhGA0Bozqrch8iaO9U/3nnKxnVW5D5E0d6p/vPA8B3ym3RXRjvrh5SkuvvlduiujHfXDylVEBQIaiCBDEAlWGBEEKAaw1MACGBAdQx8CMUzJC64BKIeWKqSdh6IUZm1naBxAQIdPDO3iqTz7B75Mp4DL4zDoXX85IbEiRquJmozQ4vEimPAGvZmOszRiu4ffMxzg3B5CNhElVsTm1WkLESwWlh8cMTTptTYqagBuNq8o9hEWuKwbViAeRXVAem9j9J4DuV0y9CrTp6mSpUVcrHKFZiFvfiGsXllV3oNqqUwGGohvBZTxgjiMgiGjWYgDEkD91VRj7yv8ACSd73ogklgf3jchuWP0K2HpjwQo6JrNIY01DZfFEinsZpHUxFzlVmIG3UL/wlW4S71Mx2kliecm8srT2BbDaLxOJqCz11XD0FOpvzWCs9v8AJnt7TySt8AbMJcR6GjVYar6uQ6xHGSm21F6QMp+UhrUmb7LESn0fSbYGX/KxP1vImI0Mf0ODzNcH3iPLXhHExFrQ4jDOmplK9Ow9BkcpN69TOGB13+vFNJUq34pncXDTJGWhsTGyJFNNBtHSsHLAZM6q3IfImjvVP955yu86o3IfImjvVP8AeeBX/fK7dFdGO+uHlLLLp75Xborox31w8pZYBwlgxRAdtCEbWGIDywhMpnVaJAeRZJpm0j0xH0IgSFbZHMRXAbKdh/q0BWtaNYyxlxNLTrbRyavZxRrEVJGFSxHRYwqz3m2EctrgVTeDUOu8QteRQML3HLql+aLwdDTGBw+JY73ijSVKtVB/fIMrZlvrFxflsdsoSXbuMrfAhr+LWrUzzEMGHyeFaTTOiamEqik7ByVDDezmOQm2YrtUdOqe17me5imq061UrVLKroqkNTAIuGJGp/p0zWd1OjCmJdyMwrkPTqXZQtZVPg4hlteitl1chtxTf9wwAwaABFAqVRkpKUpoQ9mCAgHLmDEHjzccYPC7tulMxwuEGxS2Jc8psUT6vK1wxAOuew3XaobSjjzOHw9Li4w1XV8SeOhGxNTVCR7zV5XY2J8Hm4xNimqUPFoyanzg16thI4q227AIEnfLW5Te3sFyZqzNlg/CbORtFgORb/xkCsuVmXkYj3GZ6aw0RAe0JhGjMqRmgFpjGAYCMZ1RuQ+RNHeqf7zzlUzqrch8iaO9U/3ngV/3yvjaK6Md9cPKWSXT3yu3RXRjvrh5SywHJggiEIDiw1aAIogPK0MbYwI8ggSkhLI4No7SMCYpA2n/AH4pr8XVNzycY22kjEC6NxEAEdN5rXc7ebXNYzrDU1x1mvIpMNTNIx5kQzJAkuHcJxgNDG0P1JXp1+lalPJ9aXzHLKenttyjSe8YnFjfFpCrgK5DuQEWrTsyObkagM52jVeFWD3W6R39t7UOaFByawW13pgMH1X13OSwNtRLck23cZUZFfCuLtQCuHRCtIq5YBU6MouLDXeeMqsxZCoIrlmFFqiWy4hKTo+IrW/TUUADURqvbVc77uWxa0mzIMuGC4gAFWR/xCZnq7TqS1PUCdVhs1xUVZ3YY38RpDG1QdTYh1XnWn+WpHNZR75qSsap1WbwmJLN4TE7Sx1k++OEyh6m9h84e+yK7W1f1aI9WEFia97RMOuc/wCEbec8kiO1zDpsdnuH8ZGm8pMosLgEyJpVAGDfvD5j+hEwqW1nbHscM1In9wg+zYf65o0aomNGExgMZho20EiGYDGABnVW5D5E0d6p/vPOVSZ1VuQ+RNHeqf7zwK/75Xborox31w8pUS6++V26K6Md9cPKUBgEohiNhocBwGKDG7xRAeEcUxlTDUwHLx6i0YhrAexhNtVxcWJtqPJIDEjURaT6o8BRy3PzkNjxH2TeMmDCUwmQ83sjeyA4TMWBmiZoQZMk6NrqlVGdGqJ4SvTXxqispUoOc3kO8UEixBsQQQeQjWDAs2soBq76S6GmPxVUJbPhgauSjTybKiHbsvY3vbXK0vjWp4fGVGKnENhauGrBWY06VOolRaJQNxtdeW1zqF5raVX8umyJlJdxhUdXU/jLVM7Pr8RuIX4xs1yJ3TYkfgwq1Tl33KLsC+KQnMWYGzWRgy6x7oHjljyNGAZhe0D1Wj+4TH4jIwprTpvTSotSq4UFW1jULte3FbjE0vdBoatgqxo11sdqOtzTqr+8jEC4125jPf4ndOwlCklLDUq2JNOmlMO/5KHKoAJLeEdnIJ4Duk7p8TpBlauyZaZc0qaIFWnmtmAPjG+Vdp4hCtVT8abGnYDVrM1tI65JpC/LGIlqH4xq5Nkl0QGsD4vGD+rmjNJee8k0gBCvP1RYkchI9xjZMk6SNqr9N/eAZDJmGikwTEMTNAFp1VuQ+RNHeqf7zzlQmdV7kPkTR3qn+88DwHfK+Norox31w8pSXX3yvjaK6Md9cPKUgLeZeDCUQDWGIIhgwDEIGNZoQMB5THFMjhoaHXAlVq62C67gWOoi0jPYxyv4RPst0Rpptg2Y2Y4wjZhQxYkyEKIUERZSPcaJqhqLF3Vc1GmuLqLvi71hmV95anYWzeEBqB+pmr7qq2pEZMripUK61IWlsygjbc/mG+vw+eSe5zEHeaYy52Q1DRw61CoxKE5a2+3BHg5iw6JrO6dxvqgVN+smbf7g74GY22cgGX/TA1N4LtMvBMihMy8UwYQaGTaBvq4pBp7ZOokCBsM4Aj1E3EipUTax9km78MotquNhgafTK/mA8qj3gkf+Jr5tNM+Kh5yPYRf+E1RMzrWBaCTDvAaRSTqvch8iaO9U/wB55ynOrNyHyJo71T/eeB4DvltuiujHfXDykwZdnfLbdFdGO/l5SN4B3hAxu8UGA7mmXjV4QMByLaJeLeAQMk0aZKOwFyLDVtttMiAyRRrZVYEXBI1S4mkaqwOzVxX6ILVRzzECN+k9OYxWpW2WAmqgTAikTAPkLwBIiQoMIUQhAvClHoe5uqchXNvQD3WuWS4a9MmgoOzOAb69c1mmqoas2WmaKhUAosuU0ha5S3SSf9Ue0FUszAqXU5dRsVptfVXIOrwbfOQsZUZqlQswqNmILgAB7G2bVq12vAYvBMUmZcc/ykUMyLcc8XVz8XEPbAWmPqJIQGMU9h9kUOw1XgbGkgU+FrOqwkkG+u+rikHD1n/zDkOsmTdVreKSNg12lQ3j6RemQNqnMOe20e680ZM9Jg6TE7Qfl9ZodI0glWoo2Bzbo22+czq4j3iGZEmWmTqzch8iaO9U/3nnKlOrdyHyJo71T/eeBp92HuFxelzgfwrUF/DjE59/d0vvm9ZcuVTfxD8pXHAZpbzmB+NW7OdITIHOHAZpbzmB+NW7OZwGaW85gfjVuynR8yBzhwG6W85gfjVuzi8B2lvOYH49bsp0dMgc5cB2lvOYH49bsovAhpbzmB+PW7KdGTIHOnAjpbzmB+PW7KKdxLS1gM+B+PW7KdFRIHPJ3FdK7A+CA9fWuen8qIdxXSx/XgesVuynQ8yKkc7cCWlvOYH49bsoq7imlgD4eB1i39vW7KdETIo514EtLecwPx63ZROBDS3nMD8et2U6LmRRzpwI6W85gfj1uyi8CWlvOYH49bsp0VMijnzB7jOlka5qYIoQQ67/V8NbeIfythjHAjpb9/A/HrdlOipkUc6ncR0t5zA/HrdlB4ENLecwPx63ZToyZF0c58CGlvOYH49bsovAhpbzmB+PW7KdFzDLdI53p7imlhfw8Cb/wDXrdlMO4npb9/A/HrdlOiJklFA0NxvSijx8Hfl3+rq/wC1CXcc0oNe+YMn19Xs5fkyWkUOm5FpQfqwfsr1uykDGbielXdnFTBeFbbXrX2Aea5p0PMElHOXAbpbzmB+PW7KJwGaW85gfj1uznR8yFc38BmlvOYH41bs5eHcFoargdHYTCVihq0EZXNMlkJNRmFiQDsI4p6CZA//2Q==" data-ai-hint="ceo portrait" />
                <AvatarFallback>CEO</AvatarFallback>
              </Avatar>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">A Message from Our CEO</h3>
                <blockquote className="text-lg italic text-muted-foreground border-l-4 border-accent pl-4">
                  "Our goal is to push the boundaries of what's possible."<br/>
                  "We believe in the power of technology to create positive change."<br/>
                  "Every challenge is an opportunity for innovation and growth."<br/>
                  "Our team is our greatest asset, and their passion fuels our success."<br/>
                  "Together, we are building a legacy of excellence."
                </blockquote>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

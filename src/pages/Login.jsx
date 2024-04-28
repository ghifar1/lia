import { useGSAP } from "@gsap/react"
import { Box, Button, Card, Divider, Flex, Image, ScrollAreaAutosize, Stack, Text, TextInput, Timeline } from "@mantine/core"
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { headerVideo } from "../assets/video";
import { bandung1, bandung2, dupan, plottwist, villa, watsapp } from "../assets/image";
import { backsound } from "../assets/music";

const LoginCredential = ({ setEnvelopeOpen }) => {
    const [isError, setIsError] = useState(false)
    const [value, setValue] = useState("")
    const cekJawaban = () => {
        if (value.toLowerCase() === "oden") {
            setIsError(false)
            setEnvelopeOpen(true)
            gsap.to("#greeting", { duration: 1, opacity: 0, ease: "power2.out", display: "none" })
            gsap.to("#envelope", { duration: 1, opacity: 1, ease: "power2.out", display: "block" })
            gsap.to("#loginCredential", { duration: 1, opacity: 0, ease: "power2.out", display: "none" })
        } else {
            setIsError(true)
        }
    }
    return (
        <Box id="loginCredential" style={{ position: 'absolute', height: '100vh', width: '100vw', zIndex: 10, display: 'none' }}>
            <Box style={{ position: 'absolute', height: '100vh', width: '100vw', backgroundColor: 'black', opacity: 0.5 }}>
                aaddAAAA
            </Box>
            <Flex align="center" justify="center" style={{ height: '100vh', zIndex: 11 }}>
                <Card radius={"lg"}>
                    <Stack >
                        <Text style={{ fontSize: 30 }}>
                            What is the name of the food we eat when we spend the night in Bandung?
                        </Text>
                        {isError && <Text ta={"center"} fw={"600"} c={"red"} size="xl" >
                            not quite right :{"("}
                        </Text>}
                        <TextInput value={value} onChange={(ev) => { setValue(ev.target.value); console.log(ev.target.value) }} size="lg" />
                        <Flex justify={"center"} align={"center"}>
                            <Button variant="gradient" onClick={cekJawaban}>Submit</Button>
                        </Flex>
                    </Stack>
                </Card>
            </Flex>

        </Box>
    )
}

const GreetingsMessage = () => {
    const [loginOpen, setLoginOpen] = useState(false)
    useGSAP(() => {
        console.log("this is gsap")
        const tl = gsap.timeline({

        })
        // set delay first to timeline
        tl.set("#greetingMessage", { opacity: 0, y: 100 })
        // animate
        tl.delay(0.7)
        tl.from("#greetingMessage", { duration: 1, opacity: 0, y: 100, ease: "power2.out" })
        tl.to("#greetingMessage", { duration: 1, opacity: 1, y: 0, ease: "power2.out" })
    }, [])

    const onLoginClick = () => {
        gsap.from("#loginCredential", { duration: 1, opacity: 0, ease: "power2.out", display: 'block' })
        gsap.to("#loginCredential", { duration: 1, opacity: 1, ease: "power2.out", display: "block", delay: 0.5 })
    }

    return (
        <Box id="greetingMessage">
            <Stack align="center">
                <Text style={{ fontSize: 50 }} c={"white"}>1 Special Unread Message For You</Text>
                <div>
                    <Button variant="gradient" onClick={onLoginClick}>Open</Button>
                </div>
            </Stack>
        </Box>
    )
}

const EnvelopeOpened = () => {

    return (
        <Box id="envelope" pos={"absolute"} w={"100vw"} h={"100vh"} pt={"md"} style={{ display: 'none' }}>
            <ScrollAreaAutosize mah={"96vh"} mx="auto">
                <Flex justify={"center"}>
                    <Box>
                        <ReactPlayer url={headerVideo} loop={true} muted={true} playing={true} style={{
                            border: '3px solid white',
                            borderRadius: 10
                        }} />
                    </Box>
                </Flex>
                <Text style={{ fontSize: 60 }} fw={"600"} ta={"center"} c={"white"}
                >Hai, Lia Sabila!</Text>
                <Stack align="center">
                    <Box style={{ color: 'white' }}>
                        <Text>For the first paragraph, i want to say terima kasih udah buka pesan ini.</Text>
                        <Text>Dalam kurun waktu sekitar 3 bulan, kita udah deket dan jalan maupun explore bareng-bareng,</Text>
                        <Text>dari banyaknya jalan-jalan kita, cukup untuk membuat sebuah folder album di google drive yang berisi</Text>
                        <Text>foto-foto kita ;). Di awal, gw ga nyangka bakal deket sama lu, dimana posisi kita sama-sama masih</Text>
                        <Text>membekas terhadap orang lama. I really feel comfortable around you, mulai dari jalan-jalan, </Text>
                        <Text>ada kesamaan dari kesukaan, sama main game bareng, andd... everything</Text>
                        <Text my={"xs"}>

                        </Text>
                        <Text>
                            Sebelum melompat ke konklusi, gw ingin membawa lu jalan-jalan dulu via timeline dari
                        </Text>
                        <Text>
                            rekam jejak kita
                        </Text>
                    </Box>
                </Stack>
                <Divider variant="dashed" my={"md"} />
                <Stack align="center">
                    <Timeline bulletSize={24} lineWidth={2}>
                        <Timeline.Item style={{ color: 'white' }} title='Perjalanan bersama "pertama" kita'>
                            <Text size="xs" mt={4}>Bandung, 9 Februari 2024</Text>
                            <Flex gap={"sm"}>
                                <Image src={bandung1} height={"200"} />
                                <Image src={bandung2} height={"200"} />
                            </Flex>
                            <Text size="sm">Berawal dari rencana dadakan di bandung, sekaligus menjadi perjalanan pertama kita,</Text>
                            <Text size="sm">mengunjungi tempat wisata farm house susu lembang, mini mania, orchid forest, jl. braga</Text>

                        </Timeline.Item>
                        <Timeline.Item style={{ color: 'white' }} title='Fast response "pertama" lu'>
                            <Text size="xs" mt={4}>Whatsapp, 29 Februari 2024</Text>
                            <Flex gap={"sm"}>
                                <Image src={watsapp} height={"200"} />
                            </Flex>
                            <Text size="sm">Tiba-tiba seorang Lia dengan very slow responnya membalas chat under 1 milisecond</Text>

                        </Timeline.Item>
                        <Timeline.Item style={{ color: 'white' }} title='Perjalan kedua kita, tapi dengan perasaan yang berbeda'>
                            <Text size="xs" mt={4}>Dufan, 2 Maret 2024</Text>
                            <Flex gap={"sm"}>
                                <Image src={dupan} height={"200"} />
                            </Flex>
                            <Text size="sm">Memang sebelumnya gw diajak gratis ke dufan sama Arya, tetapi karena gw gamau sendiri,</Text>
                            <Text size="sm">dan juga salah satu kesempatan gw untuk lebih deket sama lu, akhirnya gw ajak lu</Text>
                            <Text size="sm">(di sini gw berharap double date HAHAHA)</Text>

                        </Timeline.Item>
                        <Timeline.Item style={{ color: 'white' }} title='PLOT TWIST PERTAMA'>
                            <Text size="xs" mt={4}>Bogor, 12 April 2024</Text>
                            <Flex gap={"sm"}>
                                <Image src={villa} height={"200"} />
                            </Flex>
                            <Text size="sm">Niat gw untuk memenuhi janji makan di warung sunda di bogor karena tenabang bukanya lama.</Text>
                            <Text size="sm">truuusss abis itu ada yang ngajak berenang gtu numpang di villa.</Text>
                            <Text size="sm">tapi ternyataaa malahhh mengenal keluarga lu. (gw pasrah)</Text>

                        </Timeline.Item>
                        <Timeline.Item style={{ color: 'white' }} title='PLOT TWIST KEDUA'>
                            <Text size="xs" mt={4}>Home Sweet Home, 27 April 2024</Text>
                            <Flex gap={"sm"}>
                                <Image src={plottwist} height={"200"} />
                            </Flex>
                            <Text size="sm">Karena emng waktu itu panas banget, gw ngajak lu buat minum di rumah dlu biar ngedinginin badan.</Text>
                            <Text size="sm">ternyata kedua ortu gw sangat menyambut baik diri lu</Text>
                        </Timeline.Item>
                    </Timeline>
                </Stack>
                <Divider variant="dashed" my={"md"} />
                <Stack align="center">
                    <Box style={{ color: 'white' }}>
                        <Text>That's it, ternyata ga terasa ya 3 bulan itu.</Text>
                        <Text>Lia, gw suka sama lu, gw nyaman sama lu, meskipunnn inii bener2 gw bingung ngomongnya gimana ke abang lu WKWKWKWK</Text>
                        <Text>I want you replace "kak" when call me with "sayang".</Text>
                        <Text>I want your Instagram stories, chats, and whatsapp to be in first place.</Text>
                        <Text mt={"xl"} style={{ fontSize: 35 }} ta={"center"}>Lia, kamu mau jadi pacar aku?</Text>
                    </Box>
                </Stack>
                <Flex justify={"center"} align={"center"} my={"md"} gap={"sm"} pb={"xl"}>
                    <Button variant="gradient" onClick={() => { window.location = "https://wa.me/6285155075676?text=iya%2C%20aku%20mau%20jadi%20pacarmu" }}>Iya, sayang</Button>
                    <Button variant="gradient" onClick={() => { window.location = "https://wa.me/6285155075676?text=maaf%2C%20belum%20bisa%20jawab%20karena...." }} gradient={{ from: 'pink', to: 'grape', deg: 90 }}>Belum bisa jawab</Button>
                </Flex>
            </ScrollAreaAutosize>
        </Box>
    )
}

export default function Login() {
    const [envelopeOpen, setEnvelopeOpen] = useState(false)
    const [audio, setAudio] = useState(new Audio())

    useEffect(() => {
        if (!envelopeOpen) return
        audio.src = backsound
        audio.play()
    }, [envelopeOpen])

    return (
        <Box>
            <EnvelopeOpened />
            {/* <Button onClick={() => setEnvelopeOpen(true)}>Open</Button> */}
            <LoginCredential setEnvelopeOpen={setEnvelopeOpen} />
            <Flex id="greeting" justify={"center"} align={"center"} h={"100vh"} >
                <GreetingsMessage />
            </Flex>
        </Box>
    )
}
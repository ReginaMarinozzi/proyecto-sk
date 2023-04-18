import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Stack, CardMedia } from '@mui/material'

register()

const SwiperServicios = () => {

    const swiperElRef = useRef(null);

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('progress', (e) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current.addEventListener('slidechange', (e) => {
            console.log('slide changed');
        });
    }, []);

    return (
        <Stack
            m={10}
            p={10}
            spacing={2}
        >
            <swiper-container
                ref={swiperElRef}
                slides-per-view="3"
                navigation="true"
                pagination="true"
            >
                <swiper-slide>
                    <Stack
                        alignItems='center'
                        justifyContent='center'
                        sx={{ maxWidth: '5%' }}
                    >
                        <CardMedia
                            sx={{ borderRadius: '30px' }}
                            component="img"
                            image='https://i.ibb.co/k6SJDqt/pop-zebra-wp81-Dx-KUd1-E-unsplash.jpg'
                            alt='cascos'
                        />
                    </Stack>
                </swiper-slide>
                <swiper-slide>
                    <Stack
                        alignItems='center'
                        justifyContent='center'
                        sx={{ maxWidth: '5%' }}
                    >
                        <CardMedia
                            sx={{ borderRadius: '30px' }}
                            component="img"
                            image='https://i.ibb.co/k6SJDqt/pop-zebra-wp81-Dx-KUd1-E-unsplash.jpg'
                            alt='cascos'
                        />
                    </Stack>
                </swiper-slide>
                <swiper-slide>
                    <Stack
                        alignItems='center'
                        justifyContent='center'
                        sx={{ maxWidth: '5%' }}
                    >
                        <CardMedia
                            sx={{ borderRadius: '30px' }}
                            component="img"
                            image='https://i.ibb.co/k6SJDqt/pop-zebra-wp81-Dx-KUd1-E-unsplash.jpg'
                            alt='cascos'
                        />
                    </Stack>
                </swiper-slide>
                ...
            </swiper-container>
        </Stack>
    );
};

export default SwiperServicios
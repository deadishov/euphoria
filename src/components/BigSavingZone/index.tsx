import { Box, CardMedia } from '@mui/material'
import React from 'react'
import styles from './BigSavingZone.module.scss'


interface Card {
    id: string,
    image_url: string,
    headline: string,
    tagline: string,
    salesline: string
}

interface SavingZoneProps {
    list: Card[]
}

export const BigSavingZone: React.FC<SavingZoneProps> = ({ list }) => {
    return (
        <Box sx={{
            pt: '70px',
            pb: '100px',
            display: 'grid',
            gridTemplateColumns: `repeat(6, 16%)`,
            gridTemplateRows: 'repeat(2, 393px)',
            gap: '10px',
        }}>
            {list.map((card, index) => (
                <Box
                    key={card.id}
                    gridColumn={index === 3 || index === 4 ? 'span 3' : 'span 2'}
                >
                    <CardMedia
                        className={index === 0 ? styles.cardOneBackground : styles.cardBackground}
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '12px'
                        }}
                        component='img'
                        image={card.image_url}
                    />
                </Box>
            ))}
        </Box>
    )
}
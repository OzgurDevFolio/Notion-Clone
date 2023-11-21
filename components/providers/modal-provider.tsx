'use client'

import { useEffect, useState } from 'react'
import { SettingModal } from '../modals/settings-modal'
import { CoverImageModal } from '../modals/cover-image-modal'

export const ModalProvier = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            <SettingModal />
            <CoverImageModal />
        </>
    )
}

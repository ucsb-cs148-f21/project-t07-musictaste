import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import PictureUploader, { renderPreview } from "./PictureUploader";

describe("photo uploader", () => {
    test("see if photo is inserted", () => {
        const component = render(<PictureUploader />)
        expect(component.findByAltText("Album Cover"));
    })
})



import { ImageResponse } from 'next/og'

export const alt =
  'Elevate Recovery — Joint Commission Certified addiction treatment in Toledo, Ohio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #3b1480 0%, #5f23b8 55%, #7c3aed 100%)',
          padding: '72px 80px',
          fontFamily: 'Georgia, serif',
          color: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: 'rgba(255,255,255,0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              color: '#e3a857',
              fontWeight: 800,
            }}
          >
            ⌃
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: 2,
              fontFamily: 'Helvetica, Arial, sans-serif',
              textTransform: 'uppercase',
            }}
          >
            Elevate Recovery
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 900,
            }}
          >
            Rise above addiction. Reclaim your life.
          </div>
          <div
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Helvetica, Arial, sans-serif',
            }}
          >
            Compassionate, evidence-based treatment in Toledo, Ohio
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 26,
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          <div
            style={{
              background: '#e3a857',
              color: '#3a2a10',
              padding: '8px 20px',
              borderRadius: 999,
              fontWeight: 700,
            }}
          >
            Joint Commission Certified
          </div>
          <div>24/7 Confidential Helpline · (419) 770-3487</div>
        </div>
      </div>
    ),
    size,
  )
}

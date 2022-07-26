import './ProfileModal.css'
import {Modal, useMantineTheme} from '@mantine/core';

export const ProfileModal = ({modalOpened, setModalOpened}) => {

    const theme = useMantineTheme()

    return (
        <Modal
            overlayColor={
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modalOpened}
            onClose={() => setModalOpened(false)}>
            <form>
                <h3>Your info!</h3>

                <div>
                    <input type="text"
                           placeholder='First Name'
                           className='infoInput'
                           name='firstName'
                    />
                    <input type="text"
                           placeholder='Last Name'
                           className='infoInput'
                           name='lastName'
                    />
                </div>

                <input type="text"
                       placeholder='Works at'
                       className='infoInput'
                       name='worksAT'
                />

                <div>
                    <input type="text"
                           placeholder='Lives in'
                           className='infoInput'
                           name='livesIN'
                    />
                    <input type="text"
                           placeholder='Country'
                           className='infoInput'
                           name='country'
                    />
                </div>

                <div>
                    <input type="text"
                           placeholder='RelationShip Status'
                           className='infoInput'
                    />
                </div>

                <div>
                    Profile image
                    <input type="file" className='profileImg'/>
                    Cover image
                    <input type="file" className='coverImg'/>
                </div>
                <button className="button infoButton">Update</button>
            </form>
        </Modal>
    )
}

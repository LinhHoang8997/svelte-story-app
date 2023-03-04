
import type { sidebarQuery$input } from '../../../../artifacts/sidebarQuery'
                    
import Sidebar from './Sidebar.svelte'
		import type { ComponentProps } from 'svelte'
type SidebarProps = ComponentProps<Sidebar>

export type sidebarQueryVariables = <_Props extends SidebarProps>(args: { props: _Props }) => sidebarQuery$input
        
import React from 'react'
import WorkflowButton from './_components/workflow-button'
import Workflows from './_components'
type Props = {}

function WorkflowPage({}: Props) {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-xl sticky top-0 z-[10] p-4 bg-background/50 backdrop-blur-lg flex items-center justify-between border-b">
      Workflows
      <WorkflowButton />
      </h1>
      <Workflows />
    </div>
  )
}

export default WorkflowPage